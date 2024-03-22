import { StyleSheet } from "react-native";

import { View } from "@/shared/ui/Themed";
import { TransportList } from "@/widgets/transport-list";

export default function () {
  return (
    <View style={styles.container}>
      <TransportList />
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
