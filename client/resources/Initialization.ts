import {Session} from "meteor/session";
import {SessionKeys} from "/client/resources/GlobalVars";

Tracker.autorun(function () {
    Session.set(SessionKeys.THEME_STYLE, "light");
    Session.set(SessionKeys.DRAWER_HANDLE, true);
});