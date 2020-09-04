import {Meteor} from "meteor/meteor";
import {ClientUser} from "discord.js";

export interface UserProfile {
    avatar?: string;
    email: string;
    username: string;
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
    services: { discord: ClientUser };
    profile: UserProfile;
}