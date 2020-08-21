import {Meteor} from "meteor/meteor";
import Setting from "/imports/models/Setting";
import Settings from "/imports/collections/SettingCollection";
import Profile from "/imports/models/Profile";
import Profiles from "/imports/collections/ProfileCollection";

interface ILoginEvent {
    type: string;
    user: Meteor.User;
    allowed: boolean;
}

const UserDao = {
    onCreate(options: Object, user: Meteor.User): any {
        try {
            if (!user._id) return false;

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
            profile.familyName = " - ";
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
        switch (data['type']) {
            case 'discord': {
                const discordData = data.user.services['discord'];
                Meteor.users.update({_id: data.user._id}, {
                    $set: {
                        'profile.avatar': `https://cdn.discordapp.com/avatars/${discordData.id}/${discordData.avatar}.png`
                    }
                });
            }
        }
    }
}

export default UserDao;