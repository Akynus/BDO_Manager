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
        yes: 'Sim',
        no: 'Não',
        none: 'Nenhum',
    },
    item: {
        profile: 'Perfil',
        setting: 'Configurações',
        home: 'Página Inicial',
        theming: 'Tematização',
        general: 'Geral',
        notification: 'Notificação',
        discord: 'Discord',
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
            guardian: 'Guardiã',
            hashashin: 'Hashashin'
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
        },
        guild: 'Guilda',
        guild_items: {
            manage: 'Gerenciar',
            members: 'Membros'
        }
    },
    title: {
        application: 'BDO Manager',
        welcome: 'Bem-Vindo',
        logout: 'Encerrar sessão',
        accessibility: 'Acessibilidade',
        color_layout: 'Cor e Layout',
        description: 'Descrição',
        gear_score: 'Gear Score',
        values: 'Valores',
        character_form: 'Cadastro de Personagem',
        horse_form: 'Cadastro de Montarias',
        confirm_exclusion: 'Excluir registro',
        no_characters: 'Não há personagens',
        change_family_name: "Alterar nome de familia",
        main_character: 'Personagem principal',
        user_account: 'Conta do Usuário',
        language_and_region: 'Idioma e Região'
    },
    description: {
        invalidAuthentication: "Autenticação inválida",
        logoutUser: 'Deseja encerrar a sessão do usuário atual?',
        drawerMenuHide: 'Compactar menu lateral',
        drawerMenuShow: 'Expandir menu lateral',
        darkModeVisibility: 'Habilitar modo escuro no layout do sistema',
        searchField: 'Pesquisar',
        choseYourClass: 'Escolha sua classe',
        character_form: 'Selecione sua classe e preencha as descrições do personagem',
        horse_form: 'Preencha as descrições da montaria',
        confirm_exclusion: 'Se você realmente deseja  excluir esse registro, digite <1>{{text}}</1> no campo de texto abaixo',
        dream_horse: 'Lendário',
        commonHorse: 'Montaria',
        has_krodale: 'Set Krodale equipado',
        family_name: 'Nome da Familia',
        choose_character: 'Clique para selecionar seu personagem principal',
        login: {
            discord: 'Entrar com Discord'
        },
        setting: {
            refresh_user: 'Sincronizar informações do usuário com o Discord',
            language: 'Escolha o idiome de visualização',
            timezone: 'Informe o Fuso Horario da sua região'
        }
    },
    field: {
        user: 'Usuário',
        password: 'Senha',
        name: 'Nome',
        character: 'Personagem',
        level: 'Nivel',
        type: 'Tipo',
        combat: 'Tipo de Combate',
        horse: 'Montaria',
        atk_pre: 'AP',
        atk_awk: 'AP Desperto',
        defense: 'Defesa',
        gear_score: 'Gear Score',
        gear_score_link: 'Link/Foto da Build',
        has_krodale: 'Usa equipamento Krogdalo?',
        accel: 'Aceleração',
        speed: 'Velocidade',
        brake: 'Freio',
        turn: 'Torque',
        gender: 'Gênero',
        setting: {
            dark_mode: 'Modo Escuro',
            primary_color: 'Cor primária',
            secondary_color: 'Cor secundária',
            refresh_user: 'Atualizar Tag do usuário',
            language: 'Idioma',
            timezone: 'Fuso horário'
        }
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
        error_connection: 'Falha na comunicação com o servicor',
        login_successful: 'Bem-vindo',
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
        setting: {
            alert_authentication_third_party: 'Autenticação do usuário realizada por serviço de terceiros',
            error_refresh_user_profile: 'Erro ao atualizar perfil do usuário',
            successful_refresh_user_profile: 'Perfil do usuário atualizado com sucesso'
        }

    }
}

const pt_BR: ResourceLanguage = {
    translation: values
}

export default pt_BR;