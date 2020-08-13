import {Accounts} from "meteor/accounts-base";
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import ESession from "/imports/enumerables/ESession";

Tracker.autorun(function () {
    Session.set(ESession.DRAWER_OPENED, true);
    Session.set(ESession.LOADING_PAGE, false);
});

Accounts.onLogin(function () {
});

Accounts.onLogout(function () {
    FlowRouter.go('/login');
});