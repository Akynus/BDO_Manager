import EClasses from "/imports/enumerables/EClasses";
import ICharacterClass from "/imports/interfaces/ICharacterClass";

type ObjectType = {
    [x in EClasses]: ICharacterClass
};

const ClassContext: ObjectType = {
    [EClasses.WARRIOR]: {
        icon: '/images/classes/icons/warrior.png',
        name: 'item.class.warrior',
        value: EClasses.WARRIOR,
        img: {
            small: '/images/classes/small/warrior.jpg',
            large: '/images/classes/large/warrior.jpg'
        }
    },
    [EClasses.SORCERESS]: {
        icon: '/images/classes/icons/sorceress.png',
        name: 'item.class.sorceress',
        value: EClasses.SORCERESS,
        img: {
            small: '/images/classes/small/sorceress.jpg',
            large: '/images/classes/large/sorceress.jpg'
        }
    },
    [EClasses.RANGER]: {
        icon: '/images/classes/icons/ranger.png',
        name: 'item.class.sorceress',
        value: EClasses.RANGER,
        img: {
            small: '/images/classes/small/ranger.jpg',
            large: '/images/classes/large/ranger.jpg'
        }
    },
    [EClasses.BERSERKER]: {
        icon: '/images/classes/icons/berserker.png',
        name: 'item.class.berserker',
        value: EClasses.BERSERKER,
        img: {
            small: '/images/classes/small/berserker.jpg',
            large: '/images/classes/large/berserker.jpg'
        }
    },
    [EClasses.TAMER]: {
        icon: '/images/classes/icons/tamer.png',
        name: 'item.class.tamer',
        value: EClasses.TAMER,
        img: {
            small: '/images/classes/small/tamer.jpg',
            large: '/images/classes/large/tamer.jpg'
        }
    },
    [EClasses.VALKYRIE]: {
        icon: '/images/classes/icons/valkyrie.png',
        name: 'item.class.valkyrie',
        value: EClasses.VALKYRIE,
        img: {
            small: '/images/classes/small/valkyrie.jpg',
            large: '/images/classes/large/valkyrie.jpg'
        }
    },
    [EClasses.MUSA]: {
        icon: '/images/classes/icons/musa.png',
        name: 'item.class.musa',
        value: EClasses.MUSA,
        img: {
            small: '/images/classes/small/musa.jpg',
            large: '/images/classes/large/musa.jpg'
        }
    },
    [EClasses.MAEHWA]: {
        icon: '/images/classes/icons/maehwa.png',
        name: 'item.class.maehwa',
        value: EClasses.MAEHWA,
        img: {
            small: '/images/classes/small/maehwa.jpg',
            large: '/images/classes/large/maehwa.jpg'
        }
    },
    [EClasses.NINJA]: {
        icon: '/images/classes/icons/ninja.png',
        name: 'item.class.ninja',
        value: EClasses.NINJA,
        img: {
            small: '/images/classes/small/ninja.jpg',
            large: '/images/classes/large/ninja.jpg'
        }
    },
    [EClasses.KUNOICHI]: {
        icon: '/images/classes/icons/kunoichi.png',
        name: 'item.class.kunoichi',
        value: EClasses.KUNOICHI,
        img: {
            small: '/images/classes/small/kunoichi.jpg',
            large: '/images/classes/large/kunoichi.jpg'
        }
    },
    [EClasses.WIZARD]: {
        icon: '/images/classes/icons/wizard.png',
        name: 'item.class.wizard',
        value: EClasses.WIZARD,
        img: {
            small: '/images/classes/small/wizard.jpg',
            large: '/images/classes/large/wizard.jpg'
        }
    },
    [EClasses.WITCH]: {
        icon: '/images/classes/icons/witch.png',
        name: 'item.class.witch',
        value: EClasses.WITCH,
        img: {
            small: '/images/classes/small/witch.jpg',
            large: '/images/classes/large/witch.jpg'
        }
    },
    [EClasses.DARK_KNIGHT]: {
        icon: '/images/classes/icons/dark_knight.png',
        name: 'item.class.dark_knight',
        value: EClasses.DARK_KNIGHT,
        img: {
            small: '/images/classes/small/dark_knight.jpg',
            large: '/images/classes/large/dark_knight.jpg'
        }
    },
    [EClasses.STRIKER]: {
        icon: '/images/classes/icons/striker.png',
        name: 'item.class.striker',
        value: EClasses.STRIKER,
        img: {
            small: '/images/classes/small/striker.jpg',
            large: '/images/classes/large/striker.jpg'
        }
    },
    [EClasses.MYSTIC]: {
        icon: '/images/classes/icons/mystic.png',
        name: 'item.class.mystic',
        value: EClasses.MYSTIC,
        img: {
            small: '/images/classes/small/mystic.jpg',
            large: '/images/classes/large/mystic.jpg'
        }
    },
    [EClasses.LAHN]: {
        icon: '/images/classes/icons/lahn.png',
        name: 'item.class.lahn',
        value: EClasses.LAHN,
        img: {
            small: '/images/classes/small/lahn.jpg',
            large: '/images/classes/large/lahn.jpg'
        }
    },
    [EClasses.ARCHER]: {
        icon: '/images/classes/icons/archer.png',
        name: 'item.class.archer',
        value: EClasses.ARCHER,
        img: {
            small: '/images/classes/small/archer.jpg',
            large: '/images/classes/large/archer.jpg'
        }
    },
    [EClasses.SHAI]: {
        icon: '/images/classes/icons/shai.png',
        name: 'item.class.shai',
        value: EClasses.SHAI,
        img: {
            small: '/images/classes/small/shai.jpg',
            large: '/images/classes/large/shai.jpg'
        }
    },
    [EClasses.GUARDIAN]: {
        icon: '/images/classes/icons/guardian.png',
        name: 'item.class.guardian',
        value: EClasses.GUARDIAN,
        img: {
            small: '/images/classes/small/guardian.jpg',
            large: '/images/classes/large/guardian.jpg'
        }
    },
    [EClasses.HASHASHIN]: {
        name: 'item.class.hashashin',
        value: EClasses.HASHASHIN,
        icon: '/images/classes/icons/hashashin.png',
        img: {
            small: '/images/classes/small/hashashin.jpg',
            large: '/images/classes/large/hashashin.jpg'
        }
    }
}

export default ClassContext;