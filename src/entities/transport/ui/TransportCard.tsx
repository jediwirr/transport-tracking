import { FC } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
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
  const { t } = useTranslation();
  const transportTypes = useTransportTypes();

  return (
    <Link href={`/transport/${item.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>
          {t("Vehicle")} #{itemIndex + 1}
        </Text>

        <View style={styles.infoPanel}>
          <Text style={styles.infoTitle}>{t("Category")}</Text>
          <Text style={styles.info}>{transportTypes[item.type].name}</Text>
        </View>

        <View style={styles.infoPanel}>
          <Text style={styles.infoTitle}>{t("Driver")}</Text>
          <Text style={styles.info}>{item.driver}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 26,
    backgroundColor: "gainsboro",
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
