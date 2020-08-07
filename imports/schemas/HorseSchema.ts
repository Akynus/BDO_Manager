import SimpleSchema from 'simpl-schema';
import EHorse from "/imports/enumerables/EHorse";

export default new SimpleSchema({
    user: {
        type: String,
        denyUpdate: true
    },

    name: {
        type: String,
        optional: false,
        label: 'Horse name',
        max: 30
    },
    level: {
        type: SimpleSchema.Integer,
        optional: false,
        label: 'Horse level',
        min: 1,
        max: 30
    },
    type: {
        type: String,
        optional: false,
        label: 'Horse type',
        allowedValues: Object.values(EHorse)
    },
    speed: {
        type: Number,
        optional: false,
        label: 'Horse speed',
        defaultValue: 1,
        min: 1,
        max: 200
    },
    accel: {
        type: Number,
        optional: false,
        label: 'Horse speed',
        defaultValue: 1,
        min: 1,
        max: 200
    },
    turn: {
        type: Number,
        optional: false,
        label: 'Horse speed',
        defaultValue: 1,
        min: 1,
        max: 200
    },
    brake: {
        type: Number,
        optional: false,
        label: 'Horse speed',
        defaultValue: 1,
        min: 1,
        max: 200
    },
    gender: {
        type: String,
        optional: false,
        label: 'Horse gender',
        allowedValues: ['male', 'female']
    },
    krogdalo: {
        type: Boolean,
        optional: true,
        label: 'Horse has krogdalo',
        defaultValue: false
    },
});