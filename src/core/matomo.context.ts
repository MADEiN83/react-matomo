import { createContext } from "react";

import { MatomoInstance } from "./matomo.types";

const MatomoContext = createContext<MatomoInstance | null>(null);

export default MatomoContext;
