import {Mongo} from "meteor/mongo";
import ECharacterClass from "/imports/objects/ECharacterClass";
import ECharacterCombatStyle from "/imports/objects/ECharacterCombatStyle";

export default class Character {
    _id: Mongo.ObjectID;
    user: string;

    name: string;
    class: ECharacterClass;
    level: number;
    combatStyle:ECharacterCombatStyle;

    atkPre: number;
    atkAwk: number;
    defense: number;
}