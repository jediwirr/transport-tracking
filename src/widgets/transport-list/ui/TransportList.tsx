import { FC } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { Text, View } from "@/shared/ui/Themed";
import { fetchTransport } from "@/shared/api";
import { TransportCard } from "@/entities/transport";

export const TransportList: FC = () => {
  const { data: transport, isLoading } = useQuery({
    queryKey: ["transport"],
    queryFn: fetchTransport,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!transport) {
    return null;
  }

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
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
