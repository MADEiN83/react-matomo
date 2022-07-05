# react-matomo

Setup the Provider:

```ts
import { MatomoProvider, createInstance } from "react-matomo";

<MatomoProvider
  value={createInstance({
    url: "https://analytics.yoursite.org/",
    siteId: 9,
  })}
>
  <App />
</MatomoProvider>;
```

Use the hook:

```ts
const App = () => {
  useEffect(() => {
    trackPageView();
  }, []);

  return <div>Content goes here</div>;
};
```

# roadmap

- [ ] handle custom configuration
- [ ] handle `trackEvent`
- [ ] handle `trackSiteSearch`
- [ ] handle `trackGoal`
- [ ] handle `trackLink`
