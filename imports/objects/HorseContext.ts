import EHorse from "/imports/enumerables/EHorse";

type ObjectType = {
    [x in EHorse]: IHorse
};

const HorseContext: ObjectType = {
    [EHorse.COMMON]: {
        name: 'item.horse.common',
        img: ''
    },
    [EHorse.ARDUANATT]: {
        name: 'item.horse.arduanatt',
        img: ''
    },
    [EHorse.DINE]: {
        name: 'item.horse.dine',
        img: ''
    },
    [EHorse.DOOM]: {
        name: 'item.horse.doom',
        img: ''
    }
}

export default HorseContext;