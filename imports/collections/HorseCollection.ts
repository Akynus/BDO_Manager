import {Mongo} from "meteor/mongo";
import Horse from "/imports/models/Horse";
import Schema from "/imports/schemas/CharacterSchema";

const Horses = new Mongo.Collection<Horse>("horse");
Horses.attachSchema(Schema);
export default Horses;
