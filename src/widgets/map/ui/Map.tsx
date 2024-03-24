import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Link } from "expo-router";

import { View } from "@/shared/ui/Themed";
import { Transport, useTransportTypes } from "@/entities/transport";
import InitialRegion from "../constants/InitialRegion";
import { CustomMarker } from "./CustomMarker";

interface MapProps {
  transport: Transport[];
  initialCoordinates?: Pick<Transport["coordinates"], "latitude" | "longitude">;
}

export const Map: FC<MapProps> = (props) => {
  const { transport, initialCoordinates } = props;
  const transportTypes = useTransportTypes();

  const initialLatitude = initialCoordinates?.latitude;
  const initialLongitude = initialCoordinates?.longitude;

  // Если не переданы координаты, используем координаты по умолчанию (zoom всегда по умолчанию)
  const initialRegion = {
    ...InitialRegion,
    latitude: initialLatitude ?? InitialRegion.latitude,
    longitude: initialLongitude ?? InitialRegion.longitude,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {transport.map((item) => (
          <Marker key={item.id} coordinate={item.coordinates}>
            {/* По маркеру можно перейти на экран выбранного транспорта */}
            <Link href={`/transport/${item.id}`} asChild>
              <Pressable>
                <CustomMarker iconName={transportTypes[item.type].image} />
              </Pressable>
            </Link>
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
