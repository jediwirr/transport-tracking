import { FC } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";

import { Text, View } from "@/shared/ui/Themed";
import { Transport } from "../model/types.d";
import { useTransportTypes } from "../hooks/useTransportTypes";
import { Link } from "expo-router";

interface TransportCardProps extends Transport {
  itemIndex: number;
}

export const TransportCard: FC<TransportCardProps> = (props) => {
  const { itemIndex, ...item } = props;
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const transportTypes = useTransportTypes();

  const dynamicContainerStyle = {
    backgroundColor: colorScheme === "dark" ? "#232323" : "gainsboro",
  };

  return (
    <Link href={`/transport/${item.id}`} asChild>
      <TouchableOpacity
        style={{ ...styles.container, ...dynamicContainerStyle }}
      >
        <Text style={styles.title}>
          {t("Vehicle")} #{itemIndex + 1}
        </Text>

        <View style={styles.infoPanel}>
          <Text style={styles.infoTitle}>{t("Category")}</Text>
          <Text style={styles.info}>{transportTypes[item.type].name}</Text>
        </View>

        <View style={styles.infoPanel}>
          <Text style={styles.infoTitle}>{t("Driver")}</Text>
          <Text style={styles.info}>{item.driver.name}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 26,
    marginBottom: 8,
    borderRadius: 16,
  },
  infoPanel: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 9,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  info: {
    fontSize: 16,
  },
});
