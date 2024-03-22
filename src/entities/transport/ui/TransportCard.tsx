import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "@/shared/ui/Themed";
import { Transport, TransportType } from "../model/types.d";
import { useTranslation } from "react-i18next";

interface TransportCardProps extends Transport {
  itemIndex: number;
}

export const TransportCard: FC<TransportCardProps> = (props) => {
  const { itemIndex, ...item } = props;
  const { t } = useTranslation();

  const transportTypes = {
    [TransportType.CARGO]: t("Cargo"),
    [TransportType.PASSANGER]: t("Passenger"),
    [TransportType.SPECIAL]: t("Special"),
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>
        {t("Vehicle")} #{itemIndex + 1}
      </Text>

      <View style={styles.infoPanel}>
        <Text style={styles.infoTitle}>{t("Category")}</Text>
        <Text style={styles.info}>{transportTypes[item.type]}</Text>
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.infoTitle}>{t("Driver")}</Text>
        <Text style={styles.info}>{item.driver}</Text>
      </View>
    </TouchableOpacity>
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
