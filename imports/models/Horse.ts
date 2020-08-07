import {Mongo} from "meteor/mongo";
import EHorse from "/imports/enumerables/EHorse";

export default class Horse {
    _id: Mongo.ObjectID;
    user: string;

    name: string;
    type: EHorse;
    level: number;
    speed: number;
    accel: number;
    turn: number;
    brake: number;
    gender: "male" | "female";
    krogdalo: boolean;
}