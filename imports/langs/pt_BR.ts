import {ResourceLanguage} from "i18next";
import ILang from "/imports/interfaces/ILang";

const values: ILang = {
    action: {
        cancel: 'Cancelar',
        back: 'Voltar',
        close: 'Fechar',
        edit: 'Editar',
        open: 'Abrir',
        delete: 'Excluir',
        save: 'Salvar',
        insert: 'Adicionar',
        login: 'Entrar',
        logout: 'Sair',
        forgotPassword: 'Esqueci minha senha',
        yes: 'Sim',
        no: 'Não',
        none: 'Nenhum'
    },
    item: {
        profile: 'Perfil',
        setting: 'Configurações',
        home: 'Página Inicial',
        theming: 'Tematização',
        notification: 'Notificação',
        characters: 'Personagens',
        class: {
            warrior: 'Guerreiro',
            sorceress: 'Feiticeira',
            ranger: 'Caçadora',
            berserker: 'Berserker',
            tamer: 'Domadora',
            valkyrie: 'Valquiria',
            musa: 'Musa',
            maehwa: 'Maehwa',
            ninja: 'Ninja',
            kunoichi: 'Kunoichi',
            wizard: 'Mago',
            witch: 'Bruxa',
            striker: 'Lutador',
            mystic: 'Mistica',
            dark_knight: 'Cavaleira Negra',
            lahn: 'Lahn',
            archer: 'Arqueiro',
            shai: 'Shai',
            guardian: 'Guardiã'
        },
        combat: {
            awakening: 'Despertar',
            succession: 'Sucessão'
        },
        horse: {
            common: 'Comum até T8',
            arduanatt: 'Arduanatt',
            dine: 'Diné',
            doom: 'Doom'
        }
    },
    title: {
        application: 'BDO Manager',
        welcome: 'Bem-Vindo',
        logout: 'Encerrar sessão',
        accessibility: 'Acessibilidade',
        colorLayout: 'Cor e Layout',
        description: 'Descrição',
        gearScore: 'Gear Score',
        formCharacter: 'Cadastro de Personagem'
    },
    description: {
        loginWithDiscord: 'Entrar com Discord',
        loginWithFacebook: 'Entrar com Facebook',
        loginWithGoogle: "Entrar com Google",
        invalidAuthentication: "Autenticação inválida",
        logoutUser: 'Deseja encerrar a sessão do usuário atual?',
        drawerMenuHide: 'Compactar menu lateral',
        drawerMenuShow: 'Expandir menu lateral',
        darkModeVisibility: 'Habilitar modo escuro no layout do sistema',
        searchField: 'Pesquisar',
        choseYourClass: 'Escolha sua classe',
        formCharacter: 'Selecione sua classe e preencha as descrições do personagem'
    },
    field: {
        user: 'Usuário',
        password: 'Senha',
        darkMode: 'Modo Escuro',
        primaryColor: 'Cor primária',
        secondaryColor: 'Cor secundária',
        name: 'Nome',
        character: 'Personagem',
        level: 'Nivel',
        combat: 'Tipo de Combate',
        horse: 'Montaria',
        atkPre: 'AP',
        atkAwk: 'AP Desperto',
        defense: 'Defesa',
        gearScore: 'Gear Score'
    },
    validation: {
        required: 'Campo obrigatório',
        length: 'Quantidade de caracteres deve ser ${length}',
        denied: 'Valor não permitido',
        integer: 'Somente números inteiros',
        max: 'Valor menor ou igual à ${max}',
        min: 'Valor maior ou igual à ${min}',
        max_length: 'Tamanho maior que ${max} caracteres',
        min_length: 'Tamanho menor que ${min} caracteres'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;