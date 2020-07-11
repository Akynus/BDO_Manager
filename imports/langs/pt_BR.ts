import {ResourceLanguage} from "i18next";
import ILang from "imports/interfaces/ILang";

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
        login: 'Entrar'
    },
    description: {
        login: 'Autenticação do usuário'
    },
    field: {
        user: 'Usuário',
        password: 'Senha'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;