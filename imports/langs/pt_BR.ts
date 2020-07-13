import {ResourceLanguage} from "i18next";
import ILang from "/imports/interfaces/ILang";

const values: ILang = {
    action: {
        cancel: 'Cancelar',
        back: 'Voltar',
        close: 'Fechar',
        edit: 'Editar',
        open: 'Abrir',
        save: 'Salvar',
        login: 'Entrar',
        forgotPassword: 'Esqueci minha senha'
    },
    title: {
        application: 'BDO Manager',
        welcome: 'Bem-Vindo'
    },
    description: {
        loginWithDiscord: 'Entrar com Discord',
        loginWithFacebook: 'Entrar com Facebook',
        loginWithGoogle: "Entrar com Google",
        invalidAuthentication:"Autenticação inválida"
    },
    field: {
        user: 'Usuário',
        password: 'Senha'
    },
    validation: {
        required: 'Campo obrigatório'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;