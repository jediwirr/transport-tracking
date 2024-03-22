import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/ui/Themed";
import { fetchTransport } from "@/shared/api";
import { TransportList } from "@/widgets/transport-list";
import { TransportFilter } from "@/widgets/transport-filter";
import { TransportType } from "@/entities/transport";

export default function () {
  const { t } = useTranslation();
  const [transportType, setTransportType] = useState<TransportType>();

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
      <TransportFilter onChangeTransportType={setTransportType} />
      <TransportList transport={transport} />
    </>
  );
}
