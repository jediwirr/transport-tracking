import { useTranslation } from "react-i18next";

import { TransportType } from "../model/types.d";

export const useTransportTypes = (): Record<TransportType, string> => {
  const { t } = useTranslation();

  return {
    [TransportType.ALL]: t("All"),
    [TransportType.CARGO]: t("Cargo"),
    [TransportType.PASSANGER]: t("Passenger"),
    [TransportType.SPECIAL]: t("Special"),
  };
};
