import React from "react";
import {mount} from 'react-mounter';
import {Session} from "meteor/session";
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import EPublish from "/imports/enumerables/EPublish";
import {URLBackground} from "/imports/objects/GlobalVars";
import FixedLoading from "/client/components/layout/FixedLoading";
import Core from "/client/components/main/Core";
import ERoutes from "/imports/enumerables/ERoutes";
import ClassContext from "/imports/objects/ClassContext";
import HorseContext from "/imports/objects/HorseContext";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";
import ESession from "/imports/enumerables/ESession";

import LoginPage from "/client/pages/LoginPage";
import HomePage from "/client/pages/HomePage";
import CharacterPage from "/client/pages/CharacterPage";
import HorsePage from "/client/pages/HorsePage";

//<editor-folder defaultstate="collapsed" desc="Authenticated Routes">
const authenticatedRoute = FlowRouter.group({
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
    action() {
        mount(Core, {layout: true, children: <HomePage/>});
    }
});
authenticatedRoute.route(ERoutes.CHARACTERS, {
    name: 'characters',
    subscriptions() {
        this.register(EPublish.CHARACTERS, Meteor.subscribe(EPublish.CHARACTERS));
    },
    waitOnResources() {
        const images = Object.keys(ClassContext).flatMap(value => {
            return [
                ClassContext[value].icon,
                ClassContext[value].smallImg[ECharacterCombat.AWAKENING],
                ClassContext[value].smallImg[ECharacterCombat.SUCCESSION],
                ClassContext[value].largeImg[ECharacterCombat.AWAKENING],
                ClassContext[value].largeImg[ECharacterCombat.SUCCESSION],
            ]
        });

        return {
            images: images
        }
    },
    action() {
        mount(Core, {layout: true, children: <CharacterPage/>});
    }
});
authenticatedRoute.route(ERoutes.HORSES, {
    name: 'horses',
    subscriptions() {
        this.register(EPublish.HORSES, Meteor.subscribe(EPublish.HORSES));
    },
    waitOnResources() {
        const images = Object.keys(HorseContext).flatMap(value => {
            return [
                HorseContext[value].img
            ]
        });

        return {
            images: images
        }
    },
    action() {
        mount(Core, {layout: true, children: <HorsePage/>});
    }
});
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Unauthenticated Routes">
const unauthenticatedRoute = FlowRouter.group({
    whileWaiting() {
        mount(FixedLoading);
    },
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
        mount(Core, {layout: false, children: <LoginPage/>});
    }
});
//</editor-folder>

