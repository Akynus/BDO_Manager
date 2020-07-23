import i18n, {Resource, TFunction} from "i18next";
import {initReactI18next} from "react-i18next";
import {setLocale} from 'yup';

import pt_BR from "/imports/langs/pt_BR";

const resources: Resource = {
    pt_BR
}

export default class LanguageConfig {
    public static setLocale(t: TFunction): void {
        setLocale({
            mixed: {
                required: t('validation.required'),
                oneOf: t('validation.denied')
            },
            string: {
                length: t('validation.length'),
                max: t('validation.max_length'),
                min: t('validation.min_length')
            },
            number: {
                integer: t('validation.integer'),
                max: t('validation.max'),
                min: t('validation.min')
            }
        })
    }

    public static get() {
        return i18n;
    }
}

i18n.use(initReactI18next).init({
    resources,
    react: {
        wait: true
    },
    lng: 'pt_BR',
    fallbackLng: 'pt_BR',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackNS: [],
    debug: true,
}, (error, t) => {
    LanguageConfig.setLocale(t);
});

i18n.on('languageChanged', function (lng) {
    LanguageConfig.setLocale(i18n.t);
});

