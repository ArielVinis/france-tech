"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** true só no cliente — seguro para SSR / hydration (sem useEffect + setState) */
export function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
