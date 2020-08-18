import {Mongo} from "meteor/mongo";

export default class Profile {
    _id: Mongo.ObjectID;
    user: string;

    family: string;
    character?: Mongo.ObjectID;
}