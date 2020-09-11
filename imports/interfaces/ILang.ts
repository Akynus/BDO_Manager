export default interface ILang {
    action: {
        save: string;
        cancel: string;
        close: string;
        back: string;
        open: string;
        insert: string;
        insert_character: string;
        insert_horse: string;
        edit: string;
        delete: string;
        login: string;
        logout: string;
        yes: string;
        no: string;
        none: string;
    },
    item: {
        setting: string;
        profile: string;
        home: string;
        theming: string;
        form: string;
        discord: string;
        general: string;
        notification: string;
        my_account: string;
        account_services: {
            discord: string;
        }
        characters: string;
        horses: string;
        class: {
            warrior: string;
            sorceress: string;
            ranger: string
            berserker: string;
            tamer: string;
            valkyrie: string;
            musa: string;
            maehwa: string;
            ninja: string;
            kunoichi: string;
            wizard: string;
            witch: string;
            striker: string;
            mystic: string;
            dark_knight: string;
            lahn: string;
            archer: string;
            shai: string;
            guardian: string;
            hashashin: string;
        };
        combat: {
            awakening: string;
            succession: string;
        },
        gender: {
            male: string;
            female: string;
        },
        horse: {
            common: string;
            donkey: string;
            arduanatt: string;
            dine: string;
            doom: string;
        },
        guild: string;
        guild_items: {
            manage: string;
            members: string;
        }
    },
    title: {
        application: string;
        welcome: string;
        logout: string;
        accessibility: string;
        color_layout: string;
        gear_score: string;
        values: string;
        description: string;
        character_form: string;
        horse_form: string;
        confirm_exclusion: string;
        change_family_name: string;
        no_characters: string;
        main_character: string;
        user_account: string;
        language_and_region: string;
        path_not_found: string;
        join_guild: string;
        create_guild: string;
        guild_form: string;
    },
    description: {
        invalidAuthentication: string;
        logoutUser: string;
        drawerMenuHide: string;
        drawerMenuShow: string;
        darkModeVisibility: string;
        searchField: string;
        choseYourClass: string;
        character_form: string;
        horse_form: string;
        dream_horse: string;
        commonHorse: string;
        confirm_exclusion: string;
        has_krodale: string;
        family_name: string;
        choose_character: string;
        join_guild: string;
        create_guild: string;
        guild_form: string;
        login: {
            discord: string;
        },
        setting: {
            refresh_user: string;
            language: string;
            timezone: string;
        }
    },
    field: {
        user: string;
        password: string;
        name: string;
        character: string;
        level: string;
        combat: string;
        horse: string;
        type: string;
        atk_pre: string;
        atk_awk: string;
        defense: string;
        gear_score: string;
        gear_score_link: string;
        has_krodale: string;
        accel: string;
        speed: string;
        brake: string;
        turn: string;
        gender: string;
        setting: {
            dark_mode: string;
            primary_color: string;
            secondary_color: string;
            refresh_user: string;
            language: string;
            timezone: string;
        }
    },
    validation: {
        required: string;
        length: string;
        denied: string;
        integer: string;
        min: string;
        max: string;
        min_length: string;
        max_length: string;
        invalid: string;
    },
    message: {
        not_found: string;
        error_connection: string;
        login_successful: string;
        login_failed: string;
        logout_successful: string;
        logout_failed: string;
        success_save_character: string;
        error_save_character: string;
        success_remove_character: string;
        error_remove_character: string;
        success_save_horse: string;
        error_save_horse: string;
        success_remove_horse: string;
        error_remove_horse: string;
        error_update_setting: string;
        no_characters: string;
        setting: {
            successful_refresh_user_profile: string;
            error_refresh_user_profile: string;
            alert_authentication_third_party: string;
        }
    }
}