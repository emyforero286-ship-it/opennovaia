export type GA4EventName =
  | "reserve_demo_click"
  | "activate_agent_click"
  | "view_plans_click"
  | "pricing_section_view"
  | "demo_page_view"
  | "demo_cta_click"
  | "proposal_page_view"
  | "proposal_cta_click"
  | "funnel_page_view"
  | "demo_from_funnel_click"
  | "proposal_from_funnel_click"
  | "pricing_from_funnel_click";

type GA4EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: GA4EventName, eventParams?: GA4EventParams) => void;
  }
}

export function trackGAEvent(eventName: GA4EventName, eventParams: GA4EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, eventParams);
}
