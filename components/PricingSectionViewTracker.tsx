"use client";

import { useEffect, useRef } from "react";
import { trackGAEvent } from "@/lib/ga4";

export function PricingSectionViewTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    const pricingSection = document.getElementById("planes");

    if (!pricingSection || hasTracked.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          hasTracked.current = true;
          trackGAEvent("pricing_section_view", {
            section_id: "planes"
          });
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(pricingSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
