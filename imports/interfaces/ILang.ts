export default interface ILang {
    action: {
        save: string;
        cancel: string;
        close: string;
        back: string;
        open: string;
        insert: string;
        edit: string;
        delete: string;
        login: string;
        logout: string;
        forgotPassword: string;
        yes: string;
        no: string;
        none: string;
    },
    item: {
        setting: string;
        profile: string;
        home: string;
        theming: string;
        notification: string;
        characters: string;
        class: {
            warrior: string;
            sorceress: string;
            ranger: string
            berserker: string;
            tamer: string;
            valkyrie: string;
            musa: string;
            maehwa: string;
            ninja: string;
            kunoichi: string;
            wizard: string;
            witch: string;
            striker: string;
            mystic: string;
            dark_knight: string;
            lahn: string;
            archer: string;
            shai: string;
            guardian: string;
        };
        combat: {
            awakening: string;
            succession: string;
        },
        horse: {
            common: string;
            arduanatt: string;
            dine: string;
            doom: string;
        }
    },
    title: {
        application: string;
        welcome: string;
        logout: string;
        accessibility: string;
        colorLayout: string;
        gearScore: string;
        description: string;
        formCharacter: string
    },
    description: {
        loginWithFacebook: string;
        loginWithGoogle: string;
        loginWithDiscord: string;
        invalidAuthentication: string;
        logoutUser: string;
        drawerMenuHide: string;
        drawerMenuShow: string;
        darkModeVisibility: string;
        searchField: string;
        choseYourClass: string;
        formCharacter: string;
    },
    field: {
        user: string;
        password: string;
        darkMode: string;
        primaryColor: string;
        secondaryColor: string;
        name: string;
        character: string;
        level: string;
        combat: string;
        horse: string;
        atkPre: string;
        atkAwk: string;
        defense: string;
    },
    validation: {
        required: string;
        length: string;
        denied: string;
        integer: string;
        min: string;
        max: string;
        min_length: string;
        max_length: string;
    }
}