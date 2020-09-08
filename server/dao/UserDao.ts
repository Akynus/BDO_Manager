import {Meteor} from "meteor/meteor";
import Setting from "/imports/models/Setting";
import Settings from "/imports/collections/SettingCollection";
import Profile from "/imports/models/Profile";
import Profiles from "/imports/collections/ProfileCollection";
import User from "/imports/models/User";
import ELanguage from "/imports/enumerables/ELanguage";

interface ILoginEvent {
    type: string;
    user: User;
    allowed: boolean;
}

const UserDao = {
    //<editor-folder defaultstate="collapsed" desc="System User authentication - DONT CHANCE!">
    validateNewUser(user: Meteor.User): boolean {
        return true;
    },
    onCreate(options: any, user: User): any {
        try {
            if (!user._id) return false;
            if (!user.services.discord) return false;


            console.log(user.services.discord);

            //<editor-folder defaultstate="collapsed" desc="User options">
            user.profile = {
                avatar: `https://cdn.discordapp.com/avatars/${user.services.discord.id}/${user.services.discord.avatar}.png`,
                email: user.services.discord['email'],
                username: `${user.services.discord.username}#${user.services.discord.discriminator}`
            }
            //</editor-folder>

            //<editor-folder defaultstate="collapsed" desc="Setting Object">
            const setting = new Setting();
            setting.theming = {
                type: "light",
                primary: '#5c6bc0',
                secondary: '#2196f3'
            }

            setting.general = {
                language: Object.values(ELanguage).includes(user.services.discord.locale as ELanguage) ? user.services.discord.locale as ELanguage : ELanguage.en_US,
                timezone: '+04:00'
            }

            setting.user = user._id;
            Settings.insert(setting);
            //</editor-folder>

            //<editor-folder defaultstate="collapsed" desc="Profile Object">
            const profile = new Profile();
            profile.familyName = user.services.discord.username;
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
                const user: User = data.user;
                Meteor.users.update({
                    _id: user._id
                }, {
                    $set: {
                        profile: {
                            avatar: `https://cdn.discordapp.com/avatars/${user.services.discord.id}/${user.services.discord.avatar}.png`,
                            email: user.services.discord['email'],
                            username: `${user.services.discord.username}#${user.services.discord.discriminator}`
                        }
                    }
                });
            }
        }
    },
    //</editor-folder>
}

export default UserDao;