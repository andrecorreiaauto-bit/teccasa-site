import { useEffect } from "react";
import { CONFIGURATOR_ORIGIN, readConfiguratorMessage } from "../lib/configurator.mjs";
import { analyticsAllowed, createConfiguratorTracker } from "../lib/configurator-analytics.mjs";

export default function ConfiguratorMeasurement({ frame, src }) {
  useEffect(() => {
    if (!src) return;
    const track = createConfiguratorTracker();
    const sync = () => frame.current?.contentWindow?.postMessage({type: "teccasa:configurator:consent", enabled: analyticsAllowed()}, CONFIGURATOR_ORIGIN);
    const receive = event => {
      const message = readConfiguratorMessage(event, frame.current?.contentWindow);
      if (!message) return;
      if (message.type === "resize") sync();
      if (message.type === "analytics") track(message.value);
    };
    window.addEventListener("message", receive);
    for (const name of ["teccasa:consent-changed", "teccasa:analytics-exclusion", "storage", "focus"]) window.addEventListener(name, sync);
    sync();
    return () => {
      window.removeEventListener("message", receive);
      for (const name of ["teccasa:consent-changed", "teccasa:analytics-exclusion", "storage", "focus"]) window.removeEventListener(name, sync);
    };
  }, [frame, src]);
  return null;
}
