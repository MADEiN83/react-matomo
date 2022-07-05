import React, { FC, useEffect } from "react";
import { useMatomo } from "react-matomo";

const App: FC = () => {
  const { trackPageView, trackEvent } = useMatomo();

  useEffect(() => {
    trackPageView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>todo</p>

      <button
        onClick={() => {
          trackEvent({
            category: "cat01",
            action: "action01",
            name: "name01",
            value: "value01",
          });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
