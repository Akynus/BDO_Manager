import {Meteor} from "meteor/meteor";
import Setting from "/imports/models/Setting";
import Settings from "/imports/collections/SettingCollection";

const UserDao = {
    onCreate(user: Meteor.User): boolean {
        try {
            const setting = new Setting();
            setting.theming = {
                type: "light",
                primary: '#5c6bc0',
                secondary: '#2196f3'
            }
            setting.user = user._id!;

            Settings.insert(setting);

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}

export default UserDao;