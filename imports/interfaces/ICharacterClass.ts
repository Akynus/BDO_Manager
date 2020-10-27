import EClass from "EClass.ts";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

type Image = {
    [x in ECharacterCombat]: string;
}

interface ICharacterClass {
    icon: string;
    name: string;
    value: EClass;
    smallImg: Image;
    largeImg: Image;
}

export default ICharacterClass;