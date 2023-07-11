import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://9034763832904332b4f56b8520f70977@o4505459108347904.ingest.sentry.io/4505459135545344",
  enableInExpoDevelopment: true,
  debug: false,
  tracesSampleRate: 1.0,
});

import "expo-router/entry";
