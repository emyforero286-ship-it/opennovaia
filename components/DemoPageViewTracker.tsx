"use client";

import { useEffect, useRef } from "react";
import { trackGAEvent } from "@/lib/ga4";

export function DemoPageViewTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    hasTracked.current = true;
    trackGAEvent("demo_page_view", {
      page_path: "/demo"
    });
  }, []);

  return null;
}
