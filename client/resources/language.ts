import {Meteor} from "meteor/meteor";
import i18n, {Resource, TFunction} from "i18next";
import {initReactI18next} from "react-i18next";
import ELanguage from "/imports/enumerables/ELanguage";
import {setLocale} from 'yup';

import pt_BR from "/imports/langs/pt_BR";
import en_US from "/imports/langs/en_US";
import Settings from "/imports/collections/SettingCollection";
import Setting from "/imports/models/Setting";

const resources: Resource = {
    [ELanguage.pt_BR]: pt_BR,
    [ELanguage.en_US]: en_US
}

export default class Language {
    public static setLocale(t: TFunction): void {
        setLocale({
            mixed: {
                required: t('validation.required'),
                oneOf: t('validation.denied'),
                default: t('validation.invalid')
            },
            string: {
                url: t('validation.url'),
                length: t('validation.length'),
                max: t('validation.max_length'),
                min: t('validation.min_length'),
            },
            number: {
                integer: t('validation.integer'),
                max: t('validation.max'),
                min: t('validation.min')
            }
        })
    }

    public static setLng(lng: ELanguage): void {
        i18n.changeLanguage(lng, error => {
            if (error) {
                console.error(error);
            }
        }).then(Language.setLocale);
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
    lng: ELanguage.en_US,
    fallbackLng: [ELanguage.en_US, ELanguage.pt_BR],
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackNS: [],
    debug: Meteor.isDevelopment,
}, (error, t) => {
    if (error) console.error(error);
    Language.setLocale(t);
});

i18n.on('languageChanged', function (lng) {
    Language.setLocale(i18n.t);
});

Settings.find({}).observe({
    added(obj: Setting) {
        Language.setLng(obj.general.language);
    },
    changed(obj: Setting) {
        Language.setLng(obj.general.language);
    }
});
