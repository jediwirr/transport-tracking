import { Locales, Translations } from "@/shared/types.d";
import { I18n } from "i18n-js";

const translations: Record<Locales, Translations> = {
  [Locales.EN]: {
    lang: "English",
    currentLang: "Your language is: ",
    welcome: "Hello",
  },
  [Locales.RU]: {
    lang: "Русский",
    currentLang: "Текущий язык: ",
    welcome: "Приветик",
  },
  [Locales.JA]: {
    lang: "日本語",
    currentLang: "現在の言語",
    welcome: "こんにちは",
  },
};

export default new I18n(translations);
