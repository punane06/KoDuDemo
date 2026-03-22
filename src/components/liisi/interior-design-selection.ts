"use client";

import { createLocalStorageStore } from "@/lib/create-local-storage-store";

export const INTERIOR_DESIGN_SELECTION_DEADLINE = "Deadline May 12";

const selectionStore = createLocalStorageStore<string | null>({
  key: "liisi-interior-design-selection-v1",
  eventName: "liisi-interior-design-selection-change",
  initialValue: null,
});

export const useInteriorDesignSelection = selectionStore.useValue;
export const setInteriorDesignSelection = (packageId: string) => selectionStore.setValue(packageId);
export const clearInteriorDesignSelection = selectionStore.clear;
