import React from "react";
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import EPublish from "/imports/enumerables/EPublish";
import {URLBackground} from "/imports/objects/GlobalVars";
import FixedLoading from "/client/components/layout/FixedLoading";
import Core from "/client/components/Core";

import LoginPage from "/client/pages/LoginPage";
import {delay} from "/imports/utils/Helpers";

const WelcomeComponent = ({name}) => (<p>{name}</p>);

//<editor-folder defaultstate="collapsed" desc="Authenticated Routes">
const authenticatedRoute = FlowRouter.group({
    subscriptions() {
        this.register(EPublish.SETTING, Meteor.subscribe(EPublish.SETTING));
    },
    whileWaiting() {
        mount(FixedLoading);
    },
    triggersEnter: [(context, redirect) => {
        if (!Meteor.userId()) redirect('/login');
    }]
});
authenticatedRoute.route('/', {
    name: 'index',
    triggersEnter: [(context, redirect) => {
        redirect('/home');
    }]
});
authenticatedRoute.route('/home', {
    name: 'home',
    waitOn() {
        return new Promise(resolve => setTimeout(resolve, 5000));
    },
    action() {
        mount(WelcomeComponent, {name: 'Home'});
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
unauthenticatedRoute.route('/', {
    name: 'index',
    triggersEnter: [(context, redirect) => {
        redirect('/login');
    }]
});
unauthenticatedRoute.route('/login', {
    name: 'login',
    waitOnResources() {
        return {
            images: [URLBackground.ABOUT_LOGIN, URLBackground.BG01, URLBackground.BG02, URLBackground.BG03]
        }
    },
    waitOn() {
        return [delay(1000)]
    },
    action() {
        mount(Core, {children: <LoginPage/>});
    }
});
//</editor-folder>

