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
        my_account: 'Minha conta',
        account_services: {
            discord: 'Discord'
        },
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
        confirmExclusion: 'Excluir registro',
        no_characters: 'Não há personagens',
        change_family_name: "Alterar nome de familia",
        main_character: 'Personagem principal',
        account_and_services: 'Contas e Serviços',
        user_account: 'Conta do Usuário',
        user_password: 'Senha do Usuário'
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
        hasKrodale: 'Set Krodale equipado',
        family_name: 'Nome da Familia',
        choose_character: 'Clique para selecionar seu personagem principal',
        user_password_insert: 'Insira uma senha de acesso para habilitar a opção de <strong>Autenticação por Usuário e Senha</strong>',
        user_password_update: 'Insira sua senha antiga e uma nova senha para realizar a alteração da senha'
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
        gender: 'Gênero',
        confirm_password: 'Confirme a Nova senha',
        old_password: 'Senha atual',
        new_password: 'Nova senha'
    },
    validation: {
        required: 'Campo obrigatório',
        length: 'Quantidade de caracteres deve ser ${length}',
        denied: 'Valor não permitido',
        integer: 'Somente números inteiros',
        max: 'Valor menor ou igual à ${max}',
        min: 'Valor maior ou igual à ${min}',
        max_length: 'Tamanho maior que ${max} caracteres',
        min_length: 'Tamanho menor que ${min} caracteres',
        invalid: 'Campo invalido'
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
        error_update_setting: 'Erro ao alterar configurações do usuário',
        no_characters: 'Você não tem nenhum personagens cadastrado. <1>Clique aqui</1> para cadastrar um personagem',
        error_update_profile: 'Erro ao atualizar perfil',
        error_insert_password: 'Erro ao inserir senha do usuário',
        error_update_password: 'Error ao alterar senha do usuário',
        passwords_were_not_equals: 'Senhas não são iguais'
    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;