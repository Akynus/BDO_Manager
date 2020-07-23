import ECharacterClass from "/imports/enumerables/ECharacterClass";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

type ObjectType = {
    [x in ECharacterClass]: ICharacterClass
};

const CharacterClass: ObjectType = {
    [ECharacterClass.WARRIOR]: {
        icon: '/icons/warrior.png',
        name: 'item.class.warrior',
        value: ECharacterClass.WARRIOR
    },
    [ECharacterClass.SORCERESS]: {
        icon: '/icons/sorceress.png',
        name: 'item.class.sorceress',
        value: ECharacterClass.SORCERESS
    },
    [ECharacterClass.RANGER]: {
        icon: '/icons/ranger.png',
        name: 'item.class.sorceress',
        value: ECharacterClass.RANGER
    },
    [ECharacterClass.BERSERKER]: {
        icon: '/icons/berserker.png',
        name: 'item.class.berserker',
        value: ECharacterClass.BERSERKER
    },
    [ECharacterClass.TAMER]: {
        icon: '/icons/tamer.png',
        name: 'item.class.tamer',
        value: ECharacterClass.TAMER
    },
    [ECharacterClass.VALKYRIE]: {
        icon: '/icons/valkyrie.png',
        name: 'item.class.valkyrie',
        value: ECharacterClass.VALKYRIE
    },
    [ECharacterClass.MUSA]: {
        icon: '/icons/musa.png',
        name: 'item.class.musa',
        value: ECharacterClass.MUSA
    },
    [ECharacterClass.MAEHWA]: {
        icon: '/icons/maehwa.png',
        name: 'item.class.maehwa',
        value: ECharacterClass.MAEHWA
    },
    [ECharacterClass.NINJA]: {
        icon: '/icons/ninja.png',
        name: 'item.class.ninja',
        value: ECharacterClass.NINJA
    },
    [ECharacterClass.KUNOICHI]: {
        icon: '/icons/kunoichi.png',
        name: 'item.class.kunoichi',
        value: ECharacterClass.KUNOICHI
    },
    [ECharacterClass.WIZARD]: {
        icon: '/icons/wizard.png',
        name: 'item.class.wizard',
        value: ECharacterClass.WIZARD,
        image: {
            [ECharacterCombat.AWAKENING]: "https://s1.pearlcdn.com/SEA/contents/img/portal/gameinfo/class28_awaken_thumb_img_1.jpg",
            [ECharacterCombat.SUCCESSION]: "https://s1.pearlcdn.com/SEA/contents/img/portal/gameinfo/class28_succession_thumb_img_1.jpg"
        }
    },
    [ECharacterClass.WITCH]: {
        icon: '/icons/witch.png',
        name: 'item.class.witch',
        value: ECharacterClass.WITCH
    },
    [ECharacterClass.DARK_KNIGHT]: {
        icon: '/icons/dark_knight.png',
        name: 'item.class.dark_knight',
        value: ECharacterClass.DARK_KNIGHT
    },
    [ECharacterClass.STRIKER]: {
        icon: '/icons/striker.png',
        name: 'item.class.striker',
        value: ECharacterClass.STRIKER
    },
    [ECharacterClass.MYSTIC]: {
        icon: '/icons/mystic.png',
        name: 'item.class.mystic',
        value: ECharacterClass.MYSTIC
    },
    [ECharacterClass.LAHN]: {
        icon: '/icons/lahn.png',
        name: 'item.class.lahn',
        value: ECharacterClass.LAHN
    },
    [ECharacterClass.ARCHER]: {
        icon: '/icons/archer.png',
        name: 'item.class.archer',
        value: ECharacterClass.ARCHER
    },
    [ECharacterClass.SHAI]: {
        icon: '/icons/shai.png',
        name: 'item.class.shai',
        value: ECharacterClass.SHAI
    },
    [ECharacterClass.GUARDIAN]: {
        icon: '/icons/guardian.png',
        name: 'item.class.guardian',
        value: ECharacterClass.GUARDIAN
    },
}

export default CharacterClass;