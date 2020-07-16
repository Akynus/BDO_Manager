export default interface ILang {
    action: {
        save: string;
        cancel: string;
        close: string;
        back: string;
        open: string;
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