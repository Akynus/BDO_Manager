import i18n, {Resource} from "i18next";
import {initReactI18next} from "react-i18next";

import pt_BR from "/imports/langs/pt_BR";

const resources: Resource = {
    pt_BR
}

i18n.use(initReactI18next).init({
    resources,
    react: {
        wait: true,
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
    debug: true
});

export default class LanguageConfig {
    public static get() {
        return i18n;
    }
}