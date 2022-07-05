import MatomoTracker from ".";
import { InstanceArgs } from "./matomo.types";

function createInstance(params: InstanceArgs): MatomoTracker {
  return new MatomoTracker(params);
}

export default createInstance;
