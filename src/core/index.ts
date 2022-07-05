import { InstanceArgs } from "./matomo.types";

type Tracker = {
  trackPageView: (documentTitle: string) => {};
};

class MatomoTracker {
  private args: InstanceArgs;
  private tracker: Tracker;

  constructor(args: InstanceArgs) {
    this.args = args;

    this.init();
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

    this.tracker.trackPageView(documentTitle || document.title);
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