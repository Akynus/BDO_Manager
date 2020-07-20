import {Mongo} from "meteor/mongo";
import Character from "/imports/models/Character";
import Schema from "/imports/schemas/CharacterSchema";

const Characters = new Mongo.Collection<Character>("characters");
Characters.attachSchema(Schema);
export default Characters;
