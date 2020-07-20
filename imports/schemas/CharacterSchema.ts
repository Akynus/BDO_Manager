import SimpleSchema from 'simpl-schema';
import ECharacterClass from "/imports/objects/ECharacterClass";
import ECharacterCombatStyle from "/imports/objects/ECharacterCombatStyle";

export default new SimpleSchema({
    user: {
        type: String,
        unique: true,
        denyUpdate: true
    },

    name: {
        type: String,
        optional: false,
        label: 'Character name',
        max: 30
    },
    class: {
        type: String,
        optional: false,
        label: 'Character class',
        allowedValues: Object.values(ECharacterClass)
    },
    level: {
        type: Number,
        optional: false,
        label: 'Character level',
        max: 68,
        min: 1
    },
    combatStyle: {
        type: String,
        optional: false,
        label: 'Character combat style',
        allowedValues: Object.values(ECharacterCombatStyle)
    },
    atkPre:{
        type: Number,
        optional: false,
        label: 'Character pre attack power',
        min: 0
    },
    atkAwk:{
        type: Number,
        optional: true,
        label: 'Character awakening attack power',
        min: 0
    },
    defense:{
        type: Number,
        optional: false,
        label: 'Character defense',
        min: 0
    }
});