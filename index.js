import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://7aad586aa4bf420892c1cccf4e97ec0b@o4505459108347904.ingest.sentry.io/4505459110182912",
  enableInExpoDevelopment: true,
  debug: true,
});

import "expo-router/entry";
