import {Meteor} from "meteor/meteor";
import Setting from "/imports/models/Setting";
import Settings from "/imports/collections/SettingCollection";
import Profile from "/imports/models/Profile";
import Profiles from "/imports/collections/ProfileCollection";
import {IDiscord, IPassword, UserProfile} from "/imports/models/User";
import crypto from "crypto";

interface ILoginEvent {
    type: string;
    user: Meteor.User;
    allowed: boolean;
}

const UserDao = {
    getService(service: string): any {
        switch (service) {
            case "discord": {
                const obj = Meteor.user()?.services['discord'];

                const data: IDiscord = {
                    isUsing: Boolean(obj),
                    nickname: (obj) ? `${obj.username}#${obj.discriminator}` : undefined
                };

                return data;
            }
            case "password": {
                const password = Meteor.user()?.services['password'];
                const data: IPassword = {
                    hasPassword: Boolean(password),
                    email: (Meteor.user()?.emails && Meteor.user()?.emails![0]) ? Meteor.user()?.emails![0].address : undefined
                }

                return data;
            }
            default: {
                return undefined;
            }
        }
    },
    validateNewUser(user: Meteor.User): boolean {
        return true;
    },
    onCreate(options: { profile: UserProfile }, user: Meteor.User): any {
        try {
            if (!user._id) return false;

            //<editor-folder defaultstate="collapsed" desc="User profile">
            if (!options.profile) options.profile = {};

            if (user.services['discord']) {
                user.username = `${user.services['discord'].username}-${user.services['discord'].id}`;
                options.profile.avatar = `https://cdn.discordapp.com/avatars/${user.services['discord'].id}/${user.services['discord'].avatar}.png`;
            }

            user.profile = options.profile;
            //</editor-folder>

            //<editor-folder defaultstate="collapsed" desc="Setting Object">
            const setting = new Setting();
            setting.theming = {
                type: "light",
                primary: '#5c6bc0',
                secondary: '#2196f3'
            }
            setting.user = user._id;
            Settings.insert(setting);
            //</editor-folder>

            //<editor-folder defaultstate="collapsed" desc="Profile Object">
            const profile = new Profile();
            profile.familyName = user.username!;
            profile.user = user._id;
            Profiles.insert(profile);
            //</editor-folder>

            return user;
        } catch (e) {
            console.error(e);
            return false;
        }
    },
    onLogin(data: ILoginEvent) {
        switch (data.type) {
            case 'discord': {
                const obj = data.user.services['discord'];
                Meteor.users.update({
                    _id: data.user._id
                }, {
                    $set: {
                        'profile.avatar': `https://cdn.discordapp.com/avatars/${obj.id}/${obj.avatar}.png`
                    }
                });
            }
        }
    },
    insertPassword(newPassword: string): void {
        const service: IPassword = this.getService("password");
        if (service.hasPassword) throw new Meteor.Error(401);
        Accounts.setPassword(Meteor.userId()!, newPassword);
    },
    updatePassword(newPassword: string, oldPassword: string): void {
        const service: IPassword = this.getService("password");
        if (!service.hasPassword) throw new Meteor.Error(401);
        const digest = crypto.createHash('sha256').update(oldPassword).digest('hex');
        const data = Accounts._checkPassword(Meteor.user()!, {digest: digest, algorithm: "sha-256"});
        if (data.error) throw new Meteor.Error(401);
        Accounts.setPassword(Meteor.userId()!, newPassword, {logout: false});
    }
}

export default UserDao;