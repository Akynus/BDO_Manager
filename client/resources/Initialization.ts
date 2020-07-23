import {Session} from "meteor/session";
import {Accounts} from "meteor/accounts-base";
import {SessionKeys} from "/imports/objects/GlobalVars";
import EPublish from "/imports/enumerables/EPublish";

Tracker.autorun(function () {
    Session.set(SessionKeys.DRAWER_HANDLE, true);
    Session.set(SessionKeys.SETTING_READY, false);
    Session.set(SessionKeys.CHARACTERS_READY, false);
});

let handleSetting: Meteor.SubscriptionHandle;
let handleCharacters: Meteor.SubscriptionHandle;

Accounts.onLogin(function () {
    handleSetting = Meteor.subscribe(EPublish.SETTING, {
        onReady: () => Session.set(SessionKeys.SETTING_READY, true),
        onError: console.error,
    });

    handleCharacters = Meteor.subscribe(EPublish.CHARACTERS, {
        onReady: () => Session.set(SessionKeys.CHARACTERS_READY, true),
        onError: console.error,
    });
});

Accounts.onLogout(function () {
    if (handleSetting) handleSetting.stop();
    if (handleCharacters) handleCharacters.stop();
});