export enum TransportType {
  ALL,
  CARGO,
  PASSANGER,
  SPECIAL,
}

export interface Transport {
  id: string;
  driver: string;
  type: TransportType;
}
