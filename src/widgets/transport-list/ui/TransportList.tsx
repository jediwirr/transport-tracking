import { useTranslation } from "react-i18next";

import { Text } from "@/shared/ui/Themed";
import { useEffect } from "react";
import { fetchTransport } from "@/shared/api";

export const TransportList = () => {
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const response = await fetchTransport();
      console.log(response);
    })();
  }, []);

  return <Text>{t("Transport")}</Text>;
};
