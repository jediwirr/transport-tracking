import { ComponentProps, FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CustomMarkerProps {
  iconName: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export const CustomMarker: FC<CustomMarkerProps> = (props) => {
  const { iconName } = props;

  return <MaterialCommunityIcons name={iconName} size={24} color="red" />;
};
