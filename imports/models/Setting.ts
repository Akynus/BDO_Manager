import {Mongo} from "meteor/mongo";

export interface ITheming {
    type: 'dark' | 'light';
    primary: string;
    secondary: string;
}

export default class Setting {
    _id: Mongo.ObjectID;
    user: string;

    theming: ITheming;
}