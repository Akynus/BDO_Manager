import {Mongo} from "meteor/mongo";
import Horse from "/imports/models/Horse";
import Schema from "/imports/schemas/HorseSchema";

const Horses = new Mongo.Collection<Horse>("horses");
Horses.attachSchema(Schema);
export default Horses;
