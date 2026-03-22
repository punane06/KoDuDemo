"use client";

import { useSyncExternalStore } from "react";

export interface LocalStorageStoreOptions<T> {
  /** localStorage key prefix */
  key: string;
  /** Custom event name for cross-tab communication */
  eventName: string;
  /** Initial value (used as server snapshot and fallback) */
  initialValue: T;
  /** Optional transform function applied to deserialized values */
  transform?: (value: T) => T;
}

export interface LocalStorageStore<T> {
  /** Hook to consume store value with hydration safety */
  useValue: () => T;
  /** Set store value, persists to localStorage and fires event */
  setValue: (value: T) => void;
  /** Clear store, removes from localStorage and fires event */
  clear: () => void;
}

/**
 * Create a reusable localStorage store with hydration safety, caching, and cross-tab communication.
 *
 * Handles:
 * - Server/client hydration mismatches (cache deduplication)
 * - Cross-tab synchronization (storage + custom events)
 * - SSR safety (typeof window checks)
 * - Complex object serialization (JSON)
 * - Value transformation on read (optional normalization)
 *
 * @example
 * const todoStore = createLocalStorageStore<Todo[]>({
 *   key: "app-todos-v1",
 *   eventName: "app-todos-change",
 *   initialValue: [],
 *   transform: (todos) => todos.map(normalizeTodo),
 * });
 *
 * export const useTodos = todoStore.useValue;
 * export const setTodos = todoStore.setValue;
 */
export function createLocalStorageStore<T>(
  options: LocalStorageStoreOptions<T>
): LocalStorageStore<T> {
  const { key, eventName, initialValue, transform } = options;

  let cachedRaw: string | null = null;
  let cachedValue: T = initialValue;

  function getServerSnapshot(): T {
    return initialValue;
  }

  function readSnapshot(): T {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const persisted = localStorage.getItem(key);

    if (persisted === cachedRaw) {
      return cachedValue;
    }

    if (!persisted) {
      cachedRaw = null;
      cachedValue = initialValue;
      return initialValue;
    }

    try {
      const parsed = JSON.parse(persisted) as T;
      const transformed = transform ? transform(parsed) : parsed;
      cachedRaw = persisted;
      cachedValue = transformed;
      return transformed;
    } catch {
      // Ignore malformed localStorage payloads and keep defaults.
      cachedRaw = null;
      cachedValue = initialValue;
      return initialValue;
    }
  }

  function subscribe(onStoreChange: () => void) {
    if (typeof window === "undefined") {
      return () => undefined;
    }

    function handleStorage(event: StorageEvent) {
      if (event.key === key) {
        onStoreChange();
      }
    }

    function handleLocalChange() {
      onStoreChange();
    }

    window.addEventListener("storage", handleStorage);
    window.addEventListener(eventName, handleLocalChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(eventName, handleLocalChange);
    };
  }

  function setValue(value: T) {
    const serialized = JSON.stringify(value);
    cachedRaw = serialized;
    cachedValue = value;
    localStorage.setItem(key, serialized);
    window.dispatchEvent(new Event(eventName));
  }

  function clear() {
    cachedRaw = null;
    cachedValue = initialValue;
    localStorage.removeItem(key);
    window.dispatchEvent(new Event(eventName));
  }

  const useValue = (): T => {
    return useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);
  };

  return {
    useValue,
    setValue,
    clear,
  };
}
