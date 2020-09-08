import ELanguage from "/imports/enumerables/ELanguage";

type ObjectType = {
    [x in ELanguage]: {
        name: string;
        value: ELanguage;
        icon:string;
    }
};


const LanguageContext: ObjectType = {
    [ELanguage.pt_BR]: {
        name: "Português, Brasil",
        value: ELanguage.pt_BR,
        icon:'/icons/flags/bra.png'
    },
    [ELanguage.en_US]: {
        name: 'English, USA',
        value: ELanguage.en_US,
        icon:'/icons/flags/usa.png'
    }
}

export default LanguageContext;