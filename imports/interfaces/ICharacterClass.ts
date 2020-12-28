import EClasses from "/imports/enumerables/EClasses";

interface ICharacterClass {
    icon: string;
    name: string;
    value: EClasses;
    img: {
        small: string;
        large: string;
    }
}

export default ICharacterClass;