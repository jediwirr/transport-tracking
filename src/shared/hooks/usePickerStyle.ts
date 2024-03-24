import { useMemo } from "react";
import { useColorScheme } from "react-native";

export const usePickerStyle = () => {
  const colorScheme = useColorScheme();

  return useMemo(
    () => ({
      color: colorScheme === "dark" ? "white" : "",
    }),
    []
  );
};
