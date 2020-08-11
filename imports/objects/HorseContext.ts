import EHorse from "/imports/enumerables/EHorse";

type ObjectType = {
    [x in EHorse]: IHorse
};

const HorseContext: ObjectType = {
    [EHorse.COMMON]: {
        name: 'item.horse.common',
        img: '/images/horses/horse.jpg',
        isDreamHorse: false
    },
    [EHorse.DONKEY]:{
        name: 'item.horse.donkey',
        img: '/images/horses/donkey.jpg',
        isDreamHorse: false
    },
    [EHorse.ARDUANATT]: {
        name: 'item.horse.arduanatt',
        img: '/images/horses/arduanatt.jpg',
        isDreamHorse: true
    },
    [EHorse.DINE]: {
        name: 'item.horse.dine',
        img: '/images/horses/dine.jpg',
        isDreamHorse: true
    },
    [EHorse.DOOM]: {
        name: 'item.horse.doom',
        img: '/images/horses/doom.jpg',
        isDreamHorse: true
    }
}

export default HorseContext;