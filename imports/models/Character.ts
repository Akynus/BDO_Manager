import {Mongo} from "meteor/mongo";
import EClass from "EClass.ts";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

export default class Character {
    _id: Mongo.ObjectID;
    user: string;

    name: string;
    class: EClass;
    level: number;
    combat: ECharacterCombat;

    atkPre: number;
    atkAwk: number;
    defense: number;

    link?: string;
    horse?: Mongo.ObjectID;
}