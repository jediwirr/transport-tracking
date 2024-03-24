import { FC } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";

import { View } from "@/shared/ui/Themed";
import { Transport, TransportCard } from "@/entities/transport";

interface TransportListProps {
  transport: Transport[];
}

export const TransportList: FC<TransportListProps> = (props) => {
  const { transport } = props;

  const renderItem: ListRenderItem<Transport> = ({ item, index }) => (
    <TransportCard itemIndex={index} {...item} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={transport} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
