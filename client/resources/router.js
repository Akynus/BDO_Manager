import React from "react";
import {mount,withOptions} from 'react-mounter';
import {Session} from "meteor/session";
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import EPublish from "/imports/enumerables/EPublish";
import {URLBackground} from "/imports/objects/GlobalVars";
import Core from "/client/components/main/Core";
import ERoutes from "/imports/enumerables/ERoutes";
import ESession from "/imports/enumerables/ESession";

import LoginPage from "/client/pages/LoginPage";
import HomePage from "/client/pages/HomePage";
import ProfilePage from "/client/pages/ProfilePage";
import CharacterPage from "/client/pages/CharacterPage";
import HorsePage from "/client/pages/HorsePage";
import SettingPage from "/client/pages/SettingPage";

const ReactBuild = withOptions({
    rootId: 'application',
}, mount);

//<editor-folder defaultstate="collapsed" desc="Authenticated Routes">
const authenticatedRoute = FlowRouter.group({
    title: 'BDO Manager',
    titlePrefix: 'BDO Manager - ',
    subscriptions() {
        this.register(EPublish.SETTING, Meteor.subscribe(EPublish.SETTING));
    },
    whileWaiting() {
        Session.set(ESession.LOADING_PAGE, true);
    },
    endWaiting() {
        Session.set(ESession.LOADING_PAGE, false);
    },
    triggersEnter: [(context, redirect) => {
        if (!Meteor.userId()) redirect('/login');
    }]
});
authenticatedRoute.route(ERoutes.INDEX, {
    name: 'index',
    triggersEnter: [(context, redirect) => {
        redirect('/home');
    }]
});
authenticatedRoute.route(ERoutes.HOME, {
    name: 'home',
    title: 'Test',
    action() {
        ReactBuild(Core, {layout: true, children: <HomePage/>});
    }
});
authenticatedRoute.route(ERoutes.PROFILE, {
    name: 'profile',
    subscriptions() {
        this.register(EPublish.PROFILE, Meteor.subscribe(EPublish.PROFILE));
        this.register(EPublish.CHARACTERS, Meteor.subscribe(EPublish.CHARACTERS));
    },
    action() {
        ReactBuild(Core, {layout: true, children: <ProfilePage/>});
    }
});
authenticatedRoute.route(ERoutes.CHARACTERS, {
    name: 'characters',
    title: 'Test',
    subscriptions() {
        this.register(EPublish.CHARACTERS, Meteor.subscribe(EPublish.CHARACTERS));
        this.register(EPublish.HORSES, Meteor.subscribe(EPublish.HORSES));
    },
    action() {
        ReactBuild(Core, {layout: true, children: <CharacterPage/>});
    }
});
authenticatedRoute.route(ERoutes.HORSES, {
    name: 'horses',
    subscriptions() {
        this.register(EPublish.HORSES, Meteor.subscribe(EPublish.HORSES));
    },
    action() {
        ReactBuild(Core, {layout: true, children: <HorsePage/>});
    }
});
authenticatedRoute.route(ERoutes.SETTING, {
    name: 'setting',
    action() {
        ReactBuild(Core, {layout: true, children: <SettingPage/>});
    }
});
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Unauthenticated Routes">
const unauthenticatedRoute = FlowRouter.group({
    triggersEnter: [(context, redirect) => {
        if (Meteor.userId()) redirect('/home');
    }]
});
unauthenticatedRoute.route(ERoutes.INDEX, {
    name: 'index',
    triggersEnter: [(context, redirect) => {
        redirect('/login');
    }]
});
unauthenticatedRoute.route(ERoutes.LOGIN, {
    name: 'login',
    waitOnResources() {
        return {
            images: [URLBackground.ABOUT_LOGIN,
                URLBackground.BG01,
                URLBackground.BG02,
                URLBackground.BG03
            ]
        }
    },
    action() {
        ReactBuild(Core, {layout: false, children: <LoginPage/>});
    }
});
//</editor-folder>

