import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Button, View } from "@/shared/ui/Themed";
import { TransportFilter } from "@/widgets/transport-filter";
import { useTranslation } from "react-i18next";
import { useNavigation } from "expo-router";

export default function ModalScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TransportFilter />
      <Button title={t("Accept")} onPress={closeModal} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
