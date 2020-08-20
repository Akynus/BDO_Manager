import {Mongo} from "meteor/mongo";
import Profile from "/imports/models/Profile";
import Schema from "/imports/schemas/ProfileSchema";

const Profiles = new Mongo.Collection<Profile>("profiles");
Profiles.attachSchema(Schema);
export default Profiles;
