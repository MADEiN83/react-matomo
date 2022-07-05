export type MatomoInstance = {
  trackPageView: (documentTitle?: string) => void;
};

export type InstanceArgs = { url: string; siteId: number; userId?: number };
