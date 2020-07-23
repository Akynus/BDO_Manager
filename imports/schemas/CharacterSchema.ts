import SimpleSchema from 'simpl-schema';
import ECharacterClass from "/imports/enumerables/ECharacterClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";
import EHorse from "/imports/enumerables/EHorse";

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
    combat: {
        type: String,
        optional: false,
        label: 'Character combat',
        allowedValues: Object.values(ECharacterCombat)
    },
    horse: {
        type: String,
        optional: true,
        label: 'Horse',
        allowedValues: Object.values(EHorse)
    },
    atkPre: {
        type: Number,
        optional: false,
        label: 'Character pre attack power',
        min: 0
    },
    atkAwk: {
        type: Number,
        optional: true,
        label: 'Character awakening attack power',
        min: 0
    },
    defense: {
        type: Number,
        optional: false,
        label: 'Character defense',
        min: 0
    }
});