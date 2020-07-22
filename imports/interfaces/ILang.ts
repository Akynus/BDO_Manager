export default interface ILang {
    action: {
        save: string;
        cancel: string;
        close: string;
        back: string;
        open: string;
        insert: string;
        edit: string;
        login: string;
        logout: string;
        forgotPassword: string;
        yes: string;
        no: string;
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
        combat_style: {
            awakening: string;
            succession: string;
        }
    },
    title: {
        application: string;
        welcome: string;
        logout: string;
        accessibility: string;
        colorLayout: string;
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
    },
    field: {
        user: string;
        password: string;
        darkMode: string;
        primaryColor: string;
        secondaryColor: string;
    },
    validation: {
        required: string;
    }
}