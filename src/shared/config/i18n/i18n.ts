import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { Locales } from "./types.d";
import resources from "./constants/resources";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: Locales.RU,
});

export default i18n;
