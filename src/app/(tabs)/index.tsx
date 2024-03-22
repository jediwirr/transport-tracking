import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/ui/Themed";
import { fetchTransport } from "@/shared/api";
import { TransportList } from "@/widgets/transport-list";
import { Map } from "@/widgets/map";
import { ViewPicker } from "@/widgets/view-picker";
import { useTransportStore } from "@/widgets/transport-filter/store";

export default function () {
  const { t } = useTranslation();
  const [isMapViewOn, setIsMapViewOn] = useState(false);
  const { transportType } = useTransportStore();

  const { data: transport, isLoading } = useQuery({
    queryKey: ["transport", transportType],
    queryFn: () => fetchTransport(transportType),
  });

  if (isLoading) {
    return <Text>{t("Loading")}</Text>;
  }

  if (!transport) {
    return null;
  }

  return (
    <>
      <ViewPicker
        selectedViewIndex={+isMapViewOn}
        onViewChange={(isMapView) => setIsMapViewOn(!!isMapView)}
      />
      {isMapViewOn ? (
        <Map transport={transport} />
      ) : (
        <TransportList transport={transport} />
      )}
    </>
  );
}
