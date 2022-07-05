import React, { useContext } from "react";
import MatomoContext from "../core/matomo.context";

const useMatomo = () => {
  const instance = useContext(MatomoContext);

  const trackPageView = React.useCallback(
    (documentTitle?: string) => instance?.trackPageView(documentTitle),
    []
  );

  return { trackPageView };
};

export default useMatomo;
