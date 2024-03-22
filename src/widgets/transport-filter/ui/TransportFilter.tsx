import { FC } from "react";
import { NativeSyntheticEvent, StyleSheet } from "react-native";
import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from "@react-native-segmented-control/segmented-control";
import { useTransportTypes } from "@/entities/transport";

import { TransportType } from "@/entities/transport/model/types.d";

interface TransportFilterProps {
  onChangeTransportType: (type: TransportType) => void;
}

export const TransportFilter: FC<TransportFilterProps> = (props) => {
  const { onChangeTransportType } = props;
  const transportTypes = useTransportTypes();

  const onChangeType = async (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ) => {
    onChangeTransportType(event.nativeEvent.selectedSegmentIndex);
  };

  return (
    <SegmentedControl
      style={styles.control}
      values={Object.values(transportTypes)}
      selectedIndex={0}
      onChange={onChangeType}
    />
  );
};

const styles = StyleSheet.create({
  control: {
    marginBottom: 9,
  },
});
