import { FC } from "react";
import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from "@react-native-segmented-control/segmented-control";
import { NativeSyntheticEvent } from "react-native";
import { useTranslation } from "react-i18next";

interface ViewPickerProps {
  selectedViewIndex: number;
  onViewChange: (index: number) => void;
}

export const ViewPicker: FC<ViewPickerProps> = (props) => {
  const { selectedViewIndex, onViewChange } = props;
  const { t } = useTranslation();

  const values = [t("View as list"), t("View on map")];

  const onChange = async (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ) => {
    onViewChange(event.nativeEvent.selectedSegmentIndex);
  };

  return (
    <SegmentedControl
      values={values}
      selectedIndex={selectedViewIndex}
      onChange={onChange}
    />
  );
};
