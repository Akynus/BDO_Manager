import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    familyName: {
        type: String,
        max:30,
        label: 'Family name'
    },
    mainCharacter: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        label: 'Main character',
    },
    guild: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        label: 'Guild',
    },
    biography: {
        type: String,
        max: 200,
        optional: true,
        label: 'Player biography'
    },
    user: {
        type: String,
        unique: true,
        denyUpdate: true
    }
});