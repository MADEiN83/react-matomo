export type TrackEventTypes = {
  category: string;
  action: string;
  name?: string;
  value?: string;
};

export type MatomoInstance = {
  trackPageView: (documentTitle?: string) => void;
  trackEvent: (args: TrackEventTypes) => void;
};

export type InstanceArgs = {
  url: string;
  siteId: number;
  userId?: string;
  disabled?: boolean;
  heartBeat?: {
    active?: boolean;
    seconds?: number;
  };
  linkTracking?: boolean;
  domain?: string;
};
