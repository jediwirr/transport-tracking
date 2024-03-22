import { create } from "zustand";

import { TransportType } from "@/entities/transport";

interface TransportState {
  transportType: TransportType;
  setTransportType: (type: TransportType) => void;
}

export const useTransportStore = create<TransportState>()((set) => ({
  transportType: TransportType.ALL,
  setTransportType: (type) =>
    set((state) => ({ ...state, transportType: type })),
}));
