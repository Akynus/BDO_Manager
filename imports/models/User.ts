import {Meteor} from "meteor/meteor";

interface IProfile {
    avatar?: string;
}

export interface IDiscordData {
    nickname: string;
}

export default class User implements Meteor.User {
    profile: IProfile;
}