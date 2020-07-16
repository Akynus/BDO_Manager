import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    theming: {
        type: Object,
        label: 'Theming'
    },
    "theming.type": {
        type: String,
        label: 'Dark/Light mode',
        allowedValues: ['dark', 'light']
    },
    "theming.primary": {
        type: String,
        label: 'Primary color',
        regEx: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    },
    "theming.secondary": {
        type: String,
        label: 'Secondary color',
        regEx: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    },
    user: {
        type: String,
        unique: true,
        denyUpdate: true
    }
});