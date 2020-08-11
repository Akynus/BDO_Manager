import {Accounts} from "meteor/accounts-base";
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';

Tracker.autorun(function () {
});

Accounts.onLogin(function () {
});

Accounts.onLogout(function () {
    FlowRouter.go('/login');
});