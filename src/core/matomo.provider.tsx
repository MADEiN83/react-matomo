import React, { FC, ReactNode } from "react";
import MatomoContext from "./matomo.context";
import { MatomoInstance } from "./matomo.types";

type MatomoProviderProps = {
  children?: ReactNode;
  value: MatomoInstance;
};

const MatomoProvider: FC<MatomoProviderProps> = (props) => {
  const { children, value } = props;

  return (
    <MatomoContext.Provider value={value}>{children}</MatomoContext.Provider>
  );
};

export default MatomoProvider;
