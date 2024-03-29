import { FC } from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";

import { Locales } from "@/shared/config/i18n";
import { usePickerStyle } from "@/shared/hooks/usePickerStyle";

export const LangPicker: FC = () => {
  const { t, i18n } = useTranslation();

  const switchLocale = (locale: Locales) => {
    i18n.changeLanguage(locale);
  };

  const dynamicPickerItemStyle = usePickerStyle();

  return (
    <Picker
      style={styles.picker}
      itemStyle={dynamicPickerItemStyle}
      selectedValue={i18n.language as Locales}
      onValueChange={switchLocale}
    >
      <Picker.Item label={t("RU")} value={Locales.RU} />
      <Picker.Item label={t("EN")} value={Locales.EN} />
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 250,
    height: 250,
  },
});
