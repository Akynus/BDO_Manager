export default interface ILang {
    action: {
        save: string;
        cancel: string;
        close: string;
        back: string;
        open: string;
        edit: string;
        login: string;
        forgotPassword: string;
    },
    title: {
        application: string;
        welcome: string;
    },
    description: {
        loginWithFacebook: string;
        loginWithGoogle: string;
        loginWithDiscord: string;
        invalidAuthentication: string;
    },
    field: {
        user: string;
        password: string;
    },
    validation: {
        required: string;
    }
}