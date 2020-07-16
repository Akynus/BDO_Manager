import {Mongo} from "meteor/mongo";
import Setting from "/imports/models/Setting";
import SettingSchema from "/imports/schemas/SettingSchema";

const Settings = new Mongo.Collection<Setting>("settings");
Settings.attachSchema(SettingSchema);
export default Settings;
