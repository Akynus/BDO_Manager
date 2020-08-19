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
        insert_character: 'Adicionar Personagem',
        insert_horse: 'Adicionar Montaria',
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
        form: 'Formulário',
        characters: 'Personagens',
        horses: 'Montarias',
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
        gender: {
            male: 'Macho',
            female: 'Fêmea'
        },
        horse: {
            common: 'Cavalo',
            donkey: 'Burro',
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
        values: 'Valores',
        formCharacter: 'Cadastro de Personagem',
        formHorse: 'Cadastro de Montarias',
        confirmExclusion: 'Excluir registro'
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
        formCharacter: 'Selecione sua classe e preencha as descrições do personagem',
        formHorse: 'Preencha as descrições da montaria',
        confirmExclusion: 'Se você realmente deseja  excluir esse registro, digite <1>{{text}}</1> no campo de texto abaixo',
        dreamHorse: 'Dream Horse',
        commonHorse: 'Montaria',
        hasKrodale: 'Set Krodale equipado'
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
        type: 'Tipo',
        combat: 'Tipo de Combate',
        horse: 'Montaria',
        atkPre: 'AP',
        atkAwk: 'AP Desperto',
        defense: 'Defesa',
        gearScore: 'Gear Score',
        gearScoreLink: 'Link/Foto da Build',
        hasKrogdalo: 'Usa equipamento Krogdalo?',
        accel: 'Aceleração',
        speed: 'Velocidade',
        brake: 'Freio',
        turn: 'Torque',
        gender: 'Gênero'
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
    },
    message: {
        not_found: 'Registro não encontrado',
        login_successful: 'Bem-vindo <1>{use}</1>',
        login_failed: 'Autenticação do usuário inválida',
        logout_successful: 'Sessão do usuário encerrada',
        logout_failed: 'Erro ao encerrar a sessão do usuário',
        success_save_character: 'Personagem salvo com sucesso',
        error_save_character: 'Erro ao salvar personagem',
        success_remove_character: 'Personagem excluido com sucesso',
        error_remove_character: 'Erro ao excluir personagem',
        success_save_horse: 'Montaria salva com sucesso',
        error_save_horse: 'Erro ao salvar montaria',
        success_remove_horse: 'Montaria excluido com sucesso',
        error_remove_horse: 'Erro ao excluir montaria',
        error_update_setting: 'Erro ao alterar configurações do usuário'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;