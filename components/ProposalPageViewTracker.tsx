"use client";

import { useEffect, useRef } from "react";
import { trackGAEvent } from "@/lib/ga4";

export function ProposalPageViewTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    hasTracked.current = true;
    trackGAEvent("proposal_page_view", {
      page_path: "/propuesta"
    });
  }, []);

  return null;
}
