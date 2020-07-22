import ECharacterClass from "/imports/objects/ECharacterClass";
import ECharacterCombatStyle from "/imports/objects/ECharacterCombatStyle";

type Image = {
    [x in ECharacterCombatStyle]: string;
}

interface ICharacterClass {
    icon: string;
    name: string;
    value: ECharacterClass;
    image?: Image;
}

export default ICharacterClass;