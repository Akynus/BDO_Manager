import ECharacterClass from "/imports/enumerables/ECharacterClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

type Image = {
    [x in ECharacterCombat]: string;
}

interface ICharacterClass {
    icon: string;
    name: string;
    value: ECharacterClass;
    image?: Image;
}

export default ICharacterClass;