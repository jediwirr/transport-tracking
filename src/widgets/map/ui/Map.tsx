import { FC } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { View } from "@/shared/ui/Themed";
import { Transport, useTransportTypes } from "@/entities/transport";
import InitialRegion from "../constants/InitialRegion";
import { CustomMarker } from "./CustomMarker";

interface MapProps {
  transport: Transport[];
}

export const Map: FC<MapProps> = (props) => {
  const { transport } = props;
  const transportTypes = useTransportTypes();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={InitialRegion}>
        {transport.map((item) => (
          <Marker key={item.id} coordinate={item.coordinates}>
            <CustomMarker iconName={transportTypes[item.type].image} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
