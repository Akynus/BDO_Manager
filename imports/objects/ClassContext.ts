import EClasses from "/imports/enumerables/EClasses";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

type ObjectType = {
    [x in EClasses]: ICharacterClass
};

const ClassContext: ObjectType = {
    [EClasses.WARRIOR]: {
        icon: '/icons/warrior.png',
        name: 'item.class.warrior',
        value: EClasses.WARRIOR,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/warrior_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/warrior_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/warrior_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/warrior_succ.jpg'
        }
    },
    [EClasses.SORCERESS]: {
        icon: '/icons/sorceress.png',
        name: 'item.class.sorceress',
        value: EClasses.SORCERESS,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/sorceress_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/sorceress_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/sorceress_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/sorceress_succ.jpg'
        }
    },
    [EClasses.RANGER]: {
        icon: '/icons/ranger.png',
        name: 'item.class.sorceress',
        value: EClasses.RANGER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/ranger_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/ranger_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/ranger_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/ranger_succ.jpg'
        }
    },
    [EClasses.BERSERKER]: {
        icon: '/icons/berserker.png',
        name: 'item.class.berserker',
        value: EClasses.BERSERKER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/berserker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/berserker_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/berserker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/berserker_succ.jpg'
        }
    },
    [EClasses.TAMER]: {
        icon: '/icons/tamer.png',
        name: 'item.class.tamer',
        value: EClasses.TAMER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/tamer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/tamer_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/tamer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/tamer_succ.jpg'
        }
    },
    [EClasses.VALKYRIE]: {
        icon: '/icons/valkyrie.png',
        name: 'item.class.valkyrie',
        value: EClasses.VALKYRIE,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/valkyrie_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/valkyrie_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/valkyrie_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/valkyrie_succ.jpg'
        }
    },
    [EClasses.MUSA]: {
        icon: '/icons/musa.png',
        name: 'item.class.musa',
        value: EClasses.MUSA,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/musa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/musa_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/musa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/musa_succ.jpg'
        }
    },
    [EClasses.MAEHWA]: {
        icon: '/icons/maehwa.png',
        name: 'item.class.maehwa',
        value: EClasses.MAEHWA,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/maehwa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/maehwa_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/maehwa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/maehwa_succ.jpg'
        }
    },
    [EClasses.NINJA]: {
        icon: '/icons/ninja.png',
        name: 'item.class.ninja',
        value: EClasses.NINJA,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/ninja_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/ninja_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/ninja_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/ninja_succ.jpg'
        }
    },
    [EClasses.KUNOICHI]: {
        icon: '/icons/kunoichi.png',
        name: 'item.class.kunoichi',
        value: EClasses.KUNOICHI,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/kunoichi_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/kunoichi_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/kunoichi_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/kunoichi_succ.jpg'
        }
    },
    [EClasses.WIZARD]: {
        icon: '/icons/wizard.png',
        name: 'item.class.wizard',
        value: EClasses.WIZARD,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/wizard_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/wizard_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/wizard_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/wizard_succ.jpg'
        }
    },
    [EClasses.WITCH]: {
        icon: '/icons/witch.png',
        name: 'item.class.witch',
        value: EClasses.WITCH,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/witch_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/witch_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/witch_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/witch_succ.jpg'
        }
    },
    [EClasses.DARK_KNIGHT]: {
        icon: '/icons/dark_knight.png',
        name: 'item.class.dark_knight',
        value: EClasses.DARK_KNIGHT,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/dark_knight_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/dark_knight_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/dark_knight_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/dark_knight_succ.jpg'
        }
    },
    [EClasses.STRIKER]: {
        icon: '/icons/striker.png',
        name: 'item.class.striker',
        value: EClasses.STRIKER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/striker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/striker_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/striker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/striker_succ.jpg'
        }
    },
    [EClasses.MYSTIC]: {
        icon: '/icons/mystic.png',
        name: 'item.class.mystic',
        value: EClasses.MYSTIC,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/mystic_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/mystic_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/mystic_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/mystic_succ.jpg'
        }
    },
    [EClasses.LAHN]: {
        icon: '/icons/lahn.png',
        name: 'item.class.lahn',
        value: EClasses.LAHN,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/lahn_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/lahn_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/lahn_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/lahn_succ.jpg'
        }
    },
    [EClasses.ARCHER]: {
        icon: '/icons/archer.png',
        name: 'item.class.archer',
        value: EClasses.ARCHER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/archer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/archer_awak.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/archer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/archer_awak.jpg'
        }
    },
    [EClasses.SHAI]: {
        icon: '/icons/shai.png',
        name: 'item.class.shai',
        value: EClasses.SHAI,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/shai_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/shai_awak.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/shai_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/shai_awak.jpg'
        }
    },
    [EClasses.GUARDIAN]: {
        icon: '/icons/guardian.png',
        name: 'item.class.guardian',
        value: EClasses.GUARDIAN,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/guardian_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/guardian_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/guardian_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/guardian_succ.jpg'
        }
    },
    [EClasses.HASHASHIN]:{
        name:'item.class.hashashin',
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/hashashin_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/hashashin_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/hashashin_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/hashashin_succ.jpg'
        },
        value:EClasses.HASHASHIN,
        icon:'/icons/hashashin.png'
    }
}

export default ClassContext;