import EClasses from "/imports/enumerables/EClasses";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

type Image = {
    [x in ECharacterCombat]: string;
}

interface ICharacterClass {
    icon: string;
    name: string;
    value: EClasses;
    smallImg: Image;
    largeImg: Image;
}

export default ICharacterClass;