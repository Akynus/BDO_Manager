import SimpleSchema from 'simpl-schema';
import EClass from "/imports/enumerables/EClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

export default new SimpleSchema({
    user: {
        type: String,
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
        allowedValues: Object.values(EClass)
    },
    level: {
        type: SimpleSchema.Integer,
        optional: false,
        label: 'Character level',
        max: 68,
        min: 1
    },
    combat: {
        type: String,
        optional: false,
        label: 'Character combat',
        allowedValues: Object.values(ECharacterCombat)
    },
    horse: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        label: 'Character horse',
    },
    link: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true,
        label: 'Character build link',
    },
    atkPre: {
        type: SimpleSchema.Integer,
        optional: false,
        label: 'Character pre attack power',
        max: 999,
        min: 0
    },
    atkAwk: {
        type: SimpleSchema.Integer,
        optional: true,
        label: 'Character awakening attack power',
        max: 999,
        min: 0
    },
    defense: {
        type: SimpleSchema.Integer,
        optional: false,
        label: 'Character defense',
        max: 999,
        min: 0
    }
});