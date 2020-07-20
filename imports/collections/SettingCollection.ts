import {Mongo} from "meteor/mongo";
import Setting from "/imports/models/Setting";
import Schema from "/imports/schemas/SettingSchema";

const Settings = new Mongo.Collection<Setting>("settings");
Settings.attachSchema(Schema);
export default Settings;
