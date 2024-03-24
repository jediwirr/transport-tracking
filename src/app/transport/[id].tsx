import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { Text, View } from "@/shared/ui/Themed";
import { useTransportStore } from "@/widgets/transport-filter/store";
import { Transport, useTransportTypes } from "@/entities/transport";
import { Map } from "@/widgets/map";

export default function TransportScreen() {
  const { t } = useTranslation();
  // Берём параметры из url
  const params = useLocalSearchParams();
  const transportId = params.id;
  const queryClient = useQueryClient();
  const { transportType } = useTransportStore();
  const transportTypes = useTransportTypes();

  const [currentTransport, setCurrentTransport] = useState<Transport>();

  useEffect(() => {
    // Достаём данные из кэша
    const data: Transport[] =
      queryClient.getQueryData(["transport", transportType]) ?? [];

    // Находим транспорт с нужным id
    setCurrentTransport(data.find((item) => item.id === transportId));
  }, [queryClient]);

  if (!currentTransport) {
    return <Text>{t("No such transport")}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoPanel}>
        <Text style={styles.title}>{t("Category")}</Text>
        <Text style={styles.info}>
          {transportTypes[currentTransport?.type].name}
        </Text>
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.title}>{t("Driver")}</Text>
        <Text style={styles.info}>{currentTransport?.driver}</Text>
      </View>

      <Map
        initialCoordinates={currentTransport?.coordinates} //Передаём координаты выбранного транспорта
        transport={[currentTransport]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoPanel: {
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  info: {
    fontSize: 16,
  },
});
