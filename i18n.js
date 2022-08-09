import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
//import XHR from "i18next-http-backend";
import common_fr from "./translations/fr-FR/common.json";
import common_en from "./translations/en/common.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  fr: {
    common: common_fr               // 'common' is our custom namespace
  },
  en: {
    common: common_en
  },
};

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // lng: 'en' // <--- turn off for detection to work
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: ['fr', 'en'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  })
  
export default i18n;
