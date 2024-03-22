import { FC } from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";

import { Text } from "@/shared/ui/Themed";
import { TransportType } from "@/entities/transport";
import { useTransportStore } from "../store";

export const TransportFilter: FC = () => {
  const { t } = useTranslation();
  const { transportType, setTransportType } = useTransportStore();

  const onChangeType = (value: TransportType) => {
    setTransportType(+value);
  };

  return (
    <>
      <Text style={styles.title}>{t("Select type")}</Text>

      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={transportType}
        onValueChange={onChangeType}
      >
        <Picker.Item label={t("All")} value={TransportType.ALL} />
        <Picker.Item label={t("Cargo")} value={TransportType.CARGO} />
        <Picker.Item label={t("Passenger")} value={TransportType.PASSENGER} />
        <Picker.Item label={t("Special")} value={TransportType.SPECIAL} />
      </Picker>
    </>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 250,
    height: 250,
  },
  pickerItem: {
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
});
