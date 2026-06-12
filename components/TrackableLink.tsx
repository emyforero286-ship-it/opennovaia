"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { GA4EventName } from "@/lib/ga4";
import { trackGAEvent } from "@/lib/ga4";

type TrackableLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: GA4EventName;
  eventLabel?: string;
  children: ReactNode;
};

export function TrackableLink({
  eventName,
  eventLabel,
  href,
  onClick,
  children,
  ...props
}: TrackableLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        trackGAEvent(eventName, {
          link_url: typeof href === "string" ? href : undefined,
          link_text: eventLabel ?? (typeof children === "string" ? children : undefined)
        });
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
