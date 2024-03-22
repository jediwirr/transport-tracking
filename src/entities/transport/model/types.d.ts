export enum TransportType {
  ALL,
  CARGO,
  PASSENGER,
  SPECIAL,
}

export interface TypeDescription {
  name: string;
  image: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export interface Transport {
  id: string;
  driver: string;
  type: TransportType;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
