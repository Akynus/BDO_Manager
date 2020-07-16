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
        logout: 'Sair',
        forgotPassword: 'Esqueci minha senha',
        yes: 'Sim',
        no: 'Não'
    },
    item: {
        profile: 'Perfil',
        setting: 'Configurações',
        home: 'Página Inicial',
        theming: 'Tematização',
    },
    title: {
        application: 'BDO Manager',
        welcome: 'Bem-Vindo',
        logout: 'Encerrar sessão',
        accessibility: 'Acessibilidade'
    },
    description: {
        loginWithDiscord: 'Entrar com Discord',
        loginWithFacebook: 'Entrar com Facebook',
        loginWithGoogle: "Entrar com Google",
        invalidAuthentication: "Autenticação inválida",
        logoutUser: 'Deseja encerrar a sessão do usuário atual?',
        drawerMenuHide: 'Compactar menu lateral',
        drawerMenuShow: 'Expandir menu lateral'
    },
    field: {
        user: 'Usuário',
        password: 'Senha',
        darkMode: 'Modo Escuro'
    },
    validation: {
        required: 'Campo obrigatório'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;