"use client";

import { useEffect, useRef } from "react";
import { trackGAEvent } from "@/lib/ga4";

export function FunnelPageViewTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    hasTracked.current = true;
    trackGAEvent("funnel_page_view", {
      page_path: "/embudo"
    });
  }, []);

  return null;
}
