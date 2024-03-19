import { StyleSheet } from "react-native";
import * as Localization from "expo-localization";

import EditScreenInfo from "@/shared/ui/EditScreenInfo";
import { Text, View } from "@/shared/ui/Themed";
import I18n from "@/shared/constants/I18n";
import { Locales } from "@/shared/types.d";

export default function TabOneScreen() {
  I18n.locale = Localization.getLocales()[0].languageCode || Locales.EN;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t("welcome")}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
