import React from "react";
import {mount, withOptions} from 'react-mounter';
import {Session} from "meteor/session";
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {FlowRouterTitle} from 'meteor/ostrio:flow-router-title';
import EPublish from "/imports/enumerables/EPublish";
import {URLBackground} from "/imports/objects/GlobalVars";
import Core from "/client/components/main/Core";
import ERoutes from "/imports/enumerables/ERoutes";
import ESession from "/imports/enumerables/ESession";
import Language from "/client/resources/language";

import PathNotFound from "/client/components/layout/PathNotFound";
import LoginPage from "/client/pages/LoginPage";
import HomePage from "/client/pages/HomePage";
import ProfilePage from "/client/pages/ProfilePage";
import CharacterPage from "/client/pages/CharacterPage";
import HorsePage from "/client/pages/HorsePage";
import SettingPage from "/client/pages/SettingPage";
import GuildPage from "/client/pages/GuildPage";

const ReactBuild = withOptions({
    rootId: 'application',
}, mount);


const mainRouter = FlowRouter.group({
    title: 'BDO Manager',
    titlePrefix: 'BDO Manager - '
});

//<editor-folder defaultstate="collapsed" desc="Authenticated Routes">
const authenticatedRoute = mainRouter.group({
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
    title() {
        return Language.get().t('item.home');
    },
    action() {
        ReactBuild(Core, {layout: true, children: <HomePage/>});
    }
});
authenticatedRoute.route(ERoutes.PROFILE, {
    name: 'profile',
    title() {
        return Language.get().t('item.profile');
    },
    subscriptions() {
        this.register(EPublish.PROFILE, Meteor.subscribe(EPublish.PROFILE));
        this.register(EPublish.CHARACTERS, Meteor.subscribe(EPublish.CHARACTERS));
    },
    onWait() {

    },
    action() {
        ReactBuild(Core, {layout: true, children: <ProfilePage/>});
    }
});
authenticatedRoute.route(ERoutes.CHARACTERS, {
    name: 'characters',
    title() {
        return Language.get().t('item.characters');
    },
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
    title() {
        return Language.get().t('item.horses');
    },
    subscriptions() {
        this.register(EPublish.HORSES, Meteor.subscribe(EPublish.HORSES));
    },
    action() {
        ReactBuild(Core, {layout: true, children: <HorsePage/>});
    }
});
authenticatedRoute.route(ERoutes.SETTING, {
    name: 'setting',
    title() {
        return Language.get().t('item.setting');
    },
    action() {
        ReactBuild(Core, {layout: true, children: <SettingPage/>});
    }
});
authenticatedRoute.route(ERoutes.GUILD, {
    name: 'guild',
    title() {
        return Language.get().t('item.guild');
    },
    action() {
        ReactBuild(Core, {layout: true, children: <GuildPage/>});
    }
})
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Unauthenticated Routes">
const unauthenticatedRoute = mainRouter.group({
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
    title: 'Login',
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

FlowRouter.route('*', {
    name: 'not found',
    title() {
        return Language.get().t('title.path_not_found');
    },
    subscriptions() {
        this.register(EPublish.SETTING, Meteor.subscribe(EPublish.SETTING));
    },
    action() {
        ReactBuild(Core, {layout: Boolean(Meteor.userId()), children: <PathNotFound/>});
    }
});

new FlowRouterTitle(FlowRouter);
