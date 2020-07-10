import * as React from "react";
import {Meteor} from "meteor/meteor";
import {Router, Redirect, Route, Switch} from "react-router";

import LoginPage from "/client/pages/login";

export default class MainRouter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    private async getComponent(auth: boolean, component: React.Component): Promise<React.ReactNode> {
        const isAuthenticated = Boolean(Meteor.userId());

        if (auth && isAuthenticated) {
            return component;
        } else if (!auth && !isAuthenticated) {
            return component;
        } else {
            return <Redirect to={'/'}/>
        }
    }

    render() {
        return <Router>
            <Switch>
                <Route exact={true} path={'/login'} render={this.getComponent(false, LoginPage)}/>
            </Switch>
        </Router>
    }
}