import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import { Text, View } from "@/shared/ui/Themed";
import { LangPicker } from "@/widgets/lang-picker";

export default function SettingsScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Select language")}</Text>
      <LangPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
