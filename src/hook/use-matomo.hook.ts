import React, { useContext } from "react";
import MatomoContext from "../core/matomo.context";
import { TrackEventTypes } from "../core/matomo.types";

const useMatomo = () => {
  const instance = useContext(MatomoContext);

  const trackPageView = React.useCallback(
    (documentTitle?: string) => instance?.trackPageView(documentTitle),
    []
  );

  const trackEvent = React.useCallback(
    (args: TrackEventTypes) => instance?.trackEvent(args),
    []
  );

  return { trackPageView, trackEvent };
};

export default useMatomo;
