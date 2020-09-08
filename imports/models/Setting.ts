import {Mongo} from "meteor/mongo";
import ELanguage from "/imports/enumerables/ELanguage";

export interface ITheming {
    type: 'dark' | 'light';
    primary: string;
    secondary: string;
}

export interface IGeneral {
    language: ELanguage;
    timezone: string;
}

export default class Setting {
    _id: Mongo.ObjectID;
    user: string;

    general: IGeneral;
    theming: ITheming;
}