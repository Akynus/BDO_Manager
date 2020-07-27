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
        value: ECharacterClass.WARRIOR,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/warrior_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/warrior_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/warrior_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/warrior_succ.jpg'
        }
    },
    [ECharacterClass.SORCERESS]: {
        icon: '/icons/sorceress.png',
        name: 'item.class.sorceress',
        value: ECharacterClass.SORCERESS,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/sorceress_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/sorceress_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/sorceress_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/sorceress_succ.jpg'
        }
    },
    [ECharacterClass.RANGER]: {
        icon: '/icons/ranger.png',
        name: 'item.class.sorceress',
        value: ECharacterClass.RANGER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/ranger_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/ranger_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/ranger_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/ranger_succ.jpg'
        }
    },
    [ECharacterClass.BERSERKER]: {
        icon: '/icons/berserker.png',
        name: 'item.class.berserker',
        value: ECharacterClass.BERSERKER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/berserker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/berserker_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/berserker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/berserker_succ.jpg'
        }
    },
    [ECharacterClass.TAMER]: {
        icon: '/icons/tamer.png',
        name: 'item.class.tamer',
        value: ECharacterClass.TAMER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/tamer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/tamer_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/tamer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/tamer_succ.jpg'
        }
    },
    [ECharacterClass.VALKYRIE]: {
        icon: '/icons/valkyrie.png',
        name: 'item.class.valkyrie',
        value: ECharacterClass.VALKYRIE,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/valkyrie_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/valkyrie_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/valkyrie_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/valkyrie_succ.jpg'
        }
    },
    [ECharacterClass.MUSA]: {
        icon: '/icons/musa.png',
        name: 'item.class.musa',
        value: ECharacterClass.MUSA,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/musa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/musa_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/musa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/musa_succ.jpg'
        }
    },
    [ECharacterClass.MAEHWA]: {
        icon: '/icons/maehwa.png',
        name: 'item.class.maehwa',
        value: ECharacterClass.MAEHWA,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/maehwa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/maehwa_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/maehwa_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/maehwa_succ.jpg'
        }
    },
    [ECharacterClass.NINJA]: {
        icon: '/icons/ninja.png',
        name: 'item.class.ninja',
        value: ECharacterClass.NINJA,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/ninja_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/ninja_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/ninja_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/ninja_succ.jpg'
        }
    },
    [ECharacterClass.KUNOICHI]: {
        icon: '/icons/kunoichi.png',
        name: 'item.class.kunoichi',
        value: ECharacterClass.KUNOICHI,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/kunoichi_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/kunoichi_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/kunoichi_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/kunoichi_succ.jpg'
        }
    },
    [ECharacterClass.WIZARD]: {
        icon: '/icons/wizard.png',
        name: 'item.class.wizard',
        value: ECharacterClass.WIZARD,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/wizard_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/wizard_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/wizard_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/wizard_succ.jpg'
        }
    },
    [ECharacterClass.WITCH]: {
        icon: '/icons/witch.png',
        name: 'item.class.witch',
        value: ECharacterClass.WITCH,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/witch_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/witch_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/witch_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/witch_succ.jpg'
        }
    },
    [ECharacterClass.DARK_KNIGHT]: {
        icon: '/icons/dark_knight.png',
        name: 'item.class.dark_knight',
        value: ECharacterClass.DARK_KNIGHT,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/dark_knight_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/dark_knight_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/dark_knight_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/dark_knight_succ.jpg'
        }
    },
    [ECharacterClass.STRIKER]: {
        icon: '/icons/striker.png',
        name: 'item.class.striker',
        value: ECharacterClass.STRIKER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/striker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/striker_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/striker_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/striker_succ.jpg'
        }
    },
    [ECharacterClass.MYSTIC]: {
        icon: '/icons/mystic.png',
        name: 'item.class.mystic',
        value: ECharacterClass.MYSTIC,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/mystic_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/mystic_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/mystic_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/mystic_succ.jpg'
        }
    },
    [ECharacterClass.LAHN]: {
        icon: '/icons/lahn.png',
        name: 'item.class.lahn',
        value: ECharacterClass.LAHN,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/lahn_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/lahn_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/lahn_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/lahn_succ.jpg'
        }
    },
    [ECharacterClass.ARCHER]: {
        icon: '/icons/archer.png',
        name: 'item.class.archer',
        value: ECharacterClass.ARCHER,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/archer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/archer_awak.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/archer_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/archer_awak.jpg'
        }
    },
    [ECharacterClass.SHAI]: {
        icon: '/icons/shai.png',
        name: 'item.class.shai',
        value: ECharacterClass.SHAI,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/shai_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/shai_awak.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/shai_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/shai_awak.jpg'
        }
    },
    [ECharacterClass.GUARDIAN]: {
        icon: '/icons/guardian.png',
        name: 'item.class.guardian',
        value: ECharacterClass.GUARDIAN,
        smallImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/small/guardian_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/small/guardian_succ.jpg'
        },
        largeImg: {
            [ECharacterCombat.AWAKENING]: '/images/classes/large/guardian_awak.jpg',
            [ECharacterCombat.SUCCESSION]: '/images/classes/large/guardian_succ.jpg'
        }
    },
}

export default CharacterClass;