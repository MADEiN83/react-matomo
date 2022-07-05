import React, { FC, useEffect } from "react";
import { useMatomo } from "react-matomo";

const App: FC = () => {
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div>
      <p>todo</p>
    </div>
  );
};

export default App;
