import React from "react";
import ReactDOM from "react-dom/client";
import { MatomoProvider, createInstance } from "react-matomo";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MatomoProvider
      value={createInstance({
        url: "",
        siteId: 5,
        // userId: "UID76903202", // optional, default value: `undefined`.
        // trackerUrl: "https://LINK.TO.DOMAIN/tracking.php", // optional, default value: `${urlBase}matomo.php`
        // srcUrl: "https://LINK.TO.DOMAIN/tracking.js", // optional, default value: `${urlBase}matomo.js`
        // disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
        // heartBeat: {
        //   // optional, enabled by default
        //   active: true, // optional, default value: true
        //   seconds: 10, // optional, default value: `15
        // },
        // linkTracking: false, // optional, default value: true
        // configurations: {
        //   // optional, default value: {}
        //   // any valid matomo configuration, all below are optional
        //   disableCookies: true,
        //   setSecureCookie: true,
        //   setRequestMethod: "POST",
        // },
      })}
    >
      <App />
    </MatomoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
