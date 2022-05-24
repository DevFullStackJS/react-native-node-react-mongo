import i18next from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import {Strings as en} from './translation.en';
import {Strings as fr} from './translation.fr';
import {getLocales} from 'react-native-localize';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

namespace AppLanguage {
  export const i18n = i18next;

  export const init = () => {
    i18next.use(initReactI18next).init({
      lng: getLocales()[0].languageCode,
      fallbackLng: 'fr',
      resources,
      debug: true,
      ns: ['translation'],
      defaultNS: 'translation',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
      },
    });
  };

  export const setLanguage = (lng?: string) =>
    lng && i18next.changeLanguage(lng);

  export const getLanguage = () => i18next.options.lng;

  export const translate = (key: string) => i18next.t(key);
}

// hook
const useAppLanguage = () => {
  const {t, i18n} = useTranslation();
  return {
    translate: (key: string) => t(key),
    setLanguage: (lng: string) => i18next.changeLanguage(lng),
    getLanguage: () =>
      (i18n.languages.length > 0 && i18n.languages[0]) || undefined,
  };
};

export {AppLanguage, useAppLanguage};
