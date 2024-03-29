import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import authEnTranslation from './authentication/translations/en';
import authFrTranslation from './authentication/translations/fr';
import commonEnTranslation from './common/translations/en';
import commonFrTranslation from './common/translations/fr';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: commonEnTranslation,
        auth: authEnTranslation,
      },
      fr: {
        common: commonFrTranslation,
        auth: authFrTranslation,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    },
  });

export default i18n;
