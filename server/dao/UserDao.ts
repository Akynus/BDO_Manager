import {Meteor} from "meteor/meteor";
import Setting from "/imports/models/Setting";
import Settings from "/imports/collections/SettingCollection";
import Profile from "/imports/models/Profile";
import Profiles from "/imports/collections/ProfileCollection";

const UserDao = {
    onCreate(user: Meteor.User): boolean {
        try {
            if (!user._id) return false;

            const setting = new Setting();
            setting.theming = {
                type: "light",
                primary: '#5c6bc0',
                secondary: '#2196f3'
            }
            setting.user = user._id;

            Settings.insert(setting);

            const profile = new Profile();
            profile.familyName = String(user.username);
            profile.user = user._id;

            Profiles.insert(profile);

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}

export default UserDao;