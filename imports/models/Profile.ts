import {Mongo} from "meteor/mongo";

export default class Profile {
    _id: Mongo.ObjectID;
    user: string;

    familyName: string;
    mainCharacter?: Mongo.ObjectID;
    guild?: Mongo.ObjectID;
    biography?: string;
}