import ECharacterClass from "/imports/objects/ECharacterClass";
import ICharacterClass from "/imports/interfaces/ICharacterClass";

type ObjectType = {
    [x in ECharacterClass]?: ICharacterClass
};

const CharacterClass: ObjectType = {
    [ECharacterClass.WARRIOR]: {
        icon: 'https://bdocodex.com/images/skillcalc/class_0.png',
        introImg: 'https://s1.pearlcdn.com/SEA/contents/img/portal/gameinfo/class0_awaken_thumb_img_1.jpg',
        name: 'Warrior',
        value: ECharacterClass.WARRIOR
    },
    [ECharacterClass.SORCERESS]: {
        icon: 'https://bdocodex.com/images/skillcalc/class_8.png',
        introImg: 'https://s1.pearlcdn.com/SEA/contents/img/portal/gameinfo/class8_awaken_thumb_img_1.jpg',
        name: 'Sorceress',
        value: ECharacterClass.SORCERESS
    },
}

export default CharacterClass;