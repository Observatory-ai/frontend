import '@testing-library/jest-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEnTranslation from './common/translations/en';
import commonFrTranslation from './common/translations/fr';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'fr',

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      common: commonEnTranslation,
    },
    fr: {
      common: commonFrTranslation,
    },
  },
});
