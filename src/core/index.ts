import { InstanceArgs, TrackEventTypes } from "./matomo.types";

type Tracker = {
  trackPageView: (documentTitle: string) => void;
  trackEvent: (
    category: string,
    action: string,
    name?: string,
    value?: string
  ) => void;
  setCustomUrl: (customUrl: string) => void;
  setDocumentTitle: (documentTitle: string) => void;
  setUserId: (userId: string) => void;
  setCookieDomain: (domain: string) => void;
  enableHeartBeatTimer: (activeTimeInseconds: number) => void;
  enableLinkTracking: (enabled: boolean) => void;
};

class MatomoTracker {
  private args: InstanceArgs;
  private tracker: Tracker;

  constructor(args: InstanceArgs) {
    this.args = args;

    if (!this.args.disabled) {
      this.init();
    }
  }

  private init = () => {
    const self = this;
    const scriptUrl = `${this.args.url}matomo.js`;
    const scriptElement = document.createElement("script");
    const scripts = document.getElementsByTagName("script")[0];

    scriptElement.type = "text/javascript";
    scriptElement.async = true;
    scriptElement.defer = true;
    scriptElement.src = scriptUrl;
    scriptElement.onload = () => {
      if ((window as any).Matomo) {
        self.tracker = (window as any).Matomo.getTracker(
          self.args.url + "matomo.php",
          self.args.siteId
        );

        if (self.args.userId) {
          self.tracker.setUserId(self.args.userId);
        }

        if (self.args.domain) {
          self.tracker.setCookieDomain(self.args.domain);
        }

        if (self.args.heartBeat && self.args.heartBeat.active) {
          self.tracker.enableHeartBeatTimer(self.args.heartBeat.seconds || 15);
        }

        self.tracker.enableLinkTracking(self.args.linkTracking || true);
      }
    };

    if (scripts && scripts.parentNode) {
      scripts.parentNode.insertBefore(scriptElement, scripts);
    }
  };

  trackPageView = async (documentTitle?: string) => {
    await this.wait();

    if (!this.tracker) {
      return;
    }

    this.tracker.setCustomUrl(document.location.href);
    this.tracker.trackPageView(documentTitle || document.title);
  };

  trackEvent = async (args: TrackEventTypes) => {
    await this.wait();

    if (!this.tracker) {
      return;
    }

    this.tracker.trackEvent(args.category, args.action, args.name, args.value);
  };

  private wait = (): Promise<void> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 10)
    );
  };
}

export default MatomoTracker;
