import {Meteor} from "meteor/meteor";

export interface UserProfile {
    avatar?: string;
}

export interface IDiscord {
    isUsing: boolean;
    nickname?: string;
}

export interface IPassword {
    hasPassword: boolean;
    email?: string;
}

export default class User implements Meteor.User {
    _id: string;
    username: string;
    profile: UserProfile;
}