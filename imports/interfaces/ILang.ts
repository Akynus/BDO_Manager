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
        login: string;
    },
    description: {
        login: string;
    },
    field: {
        user: string;
        password: string;
    }
}