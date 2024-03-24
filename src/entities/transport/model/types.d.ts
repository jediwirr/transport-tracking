export enum TransportType {
  ALL, // Добавлен для удобства сортировки
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
  driver: {
    name: string;
    contactNumber: string;
  };
  type: TransportType;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
