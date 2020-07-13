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
    },
    title: {
        application: string;
        welcome: string;
        logout: string;
    },
    description: {
        loginWithFacebook: string;
        loginWithGoogle: string;
        loginWithDiscord: string;
        invalidAuthentication: string;
        logoutUser: string;
    },
    field: {
        user: string;
        password: string;
    },
    validation: {
        required: string;
    }
}