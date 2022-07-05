# react-matomo

## install

```
npm i -D react-matomo
```

Or using `yarn`:

```
yarn add react-matomo
```

## usage

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
import { useMatomo } from "react-matomo";

const App = () => {
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView();
  }, []);

  return <div>Content goes here</div>;
};
```

Track event

```ts
import { useMatomo } from "react-matomo";

const App = () => {
  const { trackEvent } = useMatomo();

  return (
    <div>
      <button onClick={() => trackEvent("category", "action")}>Click me</button>
    </div>
  );
};
```

# roadmap

- [ ] handle custom configuration
- [x] handle `trackEvent`
- [ ] handle `trackSiteSearch`
- [ ] handle `trackGoal`
- [ ] handle `trackLink`
