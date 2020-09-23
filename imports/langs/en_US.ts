import {ResourceLanguage} from "i18next";
import ILang from "imports/interfaces/ILang";

const values: ILang = {
    action: {
        cancel: 'Cancel',
        back: 'Back',
        close: 'Close',
        edit: 'Edit',
        open: 'Open',
        save: 'Save',
        insert_horse: 'New horse',
        delete: 'Delete',
        insert: 'Insert',
        insert_character: 'New character',
        login: 'Login',
        logout: 'Logout',
        no: 'No',
        none: 'None',
        yes: 'Yes'
    },
    title: {
        application: 'BDO Manager',
        user_account: 'User Account',
        main_character: 'Main Character',
        change_family_name: 'Change family name',
        no_characters: 'No characters',
        confirm_exclusion: 'Confirm exclusion',
        accessibility: 'Accessibility',
        color_layout: 'Color layout',
        description: 'Description',
        character_form: 'Character form',
        horse_form: 'Horse form',
        gear_score: 'Gear score',
        language_and_region: 'Language & Region',
        logout: 'Logout',
        values: 'Values',
        welcome: 'Welcome',
        path_not_found: 'Path Not Found',
        create_guild: 'Create a new Guild',
        join_guild: 'Join in a Guild'
    },
    item: {
        general: 'General',
        discord: 'Discord',
        my_account: 'My Account',
        gender: {
            female: 'Female',
            male: 'Male'
        },
        form: 'Form',
        horses: 'Horses',
        account_services: {
            discord: 'Discord'
        },
        characters: 'Characters',
        class: {
            warrior: 'Warrior',
            sorceress: 'Sorceress',
            ranger: 'Ranger',
            berserker: 'Giant',
            tamer: 'Tamer',
            valkyrie: 'Valkyrie',
            musa: 'Musa',
            maehwa: 'Maehwa',
            ninja: 'Ninja',
            kunoichi: 'Kunoichi',
            wizard: 'Wizard',
            witch: 'Witch',
            striker: 'Striker',
            mystic: 'Mystic',
            dark_knight: 'Dark Knight',
            lahn: 'Lahn',
            archer: 'Archer',
            shai: 'Shai',
            guardian: 'Guardian',
            hashashin: 'Hashashin'
        },
        combat: {
            awakening: 'Awakening',
            succession: 'Succession'
        },
        home: 'Home',
        horse: {
            donkey: 'Donkey',
            arduanatt: 'Arduanatt',
            common: 'Common',
            dine: 'Dine',
            doom: 'Doom'
        },
        notification: 'Notification',
        profile: 'Profile',
        setting: 'Setting',
        theming: "theming",
        guild: 'Guild',
        guild_items: {
            manage: 'Manage',
            members: 'Members'
        }
    },
    description: {},
    field: {
        gear_score_link: 'Gear Score Link',
        gender: 'Gender',
        turn: 'Turn',
        brake: 'Brake',
        speed: 'Speed',
        accel: 'Accel',
        has_krodale: 'Horse has Krogdalo',
        type: 'Type',
        character: 'Character',
        combat: 'Combat',
        defense: 'Defense',
        gear_score: 'Gear score',
        horse: 'Horse',
        level: 'Level',
        name: 'Name',
        password: 'Password',
        setting: {
            timezone: 'Timezone',
            language: 'Language',
            refresh_user: 'Refresh user',
            dark_mode: 'Dark mode',
            primary_color: 'Primary color',
            secondary_color: 'Secondary color'
        },
        user: 'User',
        atk_awk: 'AP Awakening',
        atk_pre: 'AP Pre-Awakening'
    },
    message: {},
    validation: {
        required: 'Required',
        length: 'Length must be ${length}',
        denied: 'Value is denied',
        integer: 'Only integer',
        max: 'Value must be less or equals ${max}',
        min: 'Value must be more or equals ${min}',
        max_length: 'Length bigger than ${max} characters',
        min_length: 'Length smaller than ${min} characters',
        invalid: 'Invalid',
        url: 'Invalid link'
    },
}


const en_US: ResourceLanguage = {
    translation: values
}

export default en_US;