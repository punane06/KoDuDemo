"use client";

import { useSyncExternalStore } from "react";

const INTERIOR_DESIGN_SELECTION_KEY = "liisi-interior-design-selection-v1";
const INTERIOR_DESIGN_SELECTION_EVENT = "liisi-interior-design-selection-change";

export const INTERIOR_DESIGN_SELECTION_DEADLINE = "Deadline May 12";

let cachedSelectionRaw: string | null = null;
let cachedSelectionValue: string | null = null;

function getServerSelection() {
  return null;
}

function readSelectionSnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  const persisted = localStorage.getItem(INTERIOR_DESIGN_SELECTION_KEY);

  if (persisted === cachedSelectionRaw) {
    return cachedSelectionValue;
  }

  cachedSelectionRaw = persisted;
  cachedSelectionValue = persisted;

  return persisted;
}

function subscribeToSelection(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  function handleStorage(event: StorageEvent) {
    if (event.key === INTERIOR_DESIGN_SELECTION_KEY) {
      onStoreChange();
    }
  }

  function handleLocalSelectionChange() {
    onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(INTERIOR_DESIGN_SELECTION_EVENT, handleLocalSelectionChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(INTERIOR_DESIGN_SELECTION_EVENT, handleLocalSelectionChange);
  };
}

export function useInteriorDesignSelection() {
  return useSyncExternalStore(subscribeToSelection, readSelectionSnapshot, getServerSelection);
}

export function setInteriorDesignSelection(packageId: string) {
  cachedSelectionRaw = packageId;
  cachedSelectionValue = packageId;
  localStorage.setItem(INTERIOR_DESIGN_SELECTION_KEY, packageId);
  window.dispatchEvent(new Event(INTERIOR_DESIGN_SELECTION_EVENT));
}

export function clearInteriorDesignSelection() {
  cachedSelectionRaw = null;
  cachedSelectionValue = null;
  localStorage.removeItem(INTERIOR_DESIGN_SELECTION_KEY);
  window.dispatchEvent(new Event(INTERIOR_DESIGN_SELECTION_EVENT));
}
