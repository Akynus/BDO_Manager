import {ResourceLanguage} from "i18next";
import ILang from "imports/interfaces/ILang";

const values: ILang = {
    actions: {
        cancel: 'Cancelar',
        back: 'Voltar',
        close: 'Fechar',
        edit: 'Editar',
        open: 'Abrir',
        save: 'Salvar',
    },
    title: {
        application: 'BDO Manager',
        login:'Entrar'
    },
    description:{
        login:'Autenticação do usuário'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;