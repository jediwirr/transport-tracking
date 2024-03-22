import { useTranslation } from "react-i18next";

import { TransportType, TypeDescription } from "../model/types.d";

export const useTransportTypes = (): Record<TransportType, TypeDescription> => {
  const { t } = useTranslation();

  return {
    [TransportType.CARGO]: {
      name: t("Cargo"),
      image: "truck-cargo-container",
    },
    [TransportType.PASSENGER]: {
      name: t("Passenger"),
      image: "bus-side",
    },
    [TransportType.SPECIAL]: {
      name: t("Special"),
      image: "car-side",
    },
  };
};
