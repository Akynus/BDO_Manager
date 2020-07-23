import {Mongo} from "meteor/mongo";
import ECharacterClass from "/imports/enumerables/ECharacterClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

export default class Character {
    _id: Mongo.ObjectID;
    user: string;

    name: string;
    class: ECharacterClass;
    level: number;
    combat: ECharacterCombat;

    atkPre: number;
    atkAwk: number;
    defense: number;
}