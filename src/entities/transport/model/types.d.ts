export enum TransportType {
  CARGO,
  PASSANGER,
  SPECIAL,
}

export interface Transport {
  id: string;
  driver: string;
  type: TransportType;
}
