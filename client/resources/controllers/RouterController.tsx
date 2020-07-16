import * as React from "react";
import {Redirect, Route, Switch, BrowserRouter} from "react-router-dom";
import {withTracker} from "meteor/react-meteor-data";
import LayoutPage from "/client/components/layout/LayoutPage";

import HomePage from "/client/pages/Home";
import ProfilePage from "/client/pages/Profile";
import SettingPage from "/client/pages/Setting";

import LoginPage from "/client/pages/Login";
import {RoutePage} from "/imports/objects/GlobalVars";

class RouterController extends React.Component<{ isAuth: string | null }> {
    static Authenticated = class extends React.Component<any, any> {
        private layout(Component: React.ComponentType<any>): (props: any) => React.ReactNode {
            return () => <LayoutPage>
                <Component/>
            </LayoutPage>
        }

        render() {
            return <Switch>
                <Route exact={true} path={RoutePage.HOME} render={this.layout(HomePage)}/>
                <Route exact={true} path={RoutePage.PROFILE} render={this.layout(ProfilePage)}/>
                <Route exact={true} path={RoutePage.SETTING} render={this.layout(SettingPage)}/>

                <Redirect exact={true} path={'/'} to={'/home'}/>
                <Redirect exact={true} path={RoutePage.LOGIN} to={RoutePage.HOME}/>
            </Switch>
        }
    }

    static Unauthenticated = class extends React.Component<any, any> {
        render() {
            return <Switch>
                <Route exact={true} path={RoutePage.LOGIN} component={LoginPage}/>

                <Redirect exact={true} path={'/'} to={RoutePage.LOGIN}/>
                <Redirect to={'/'}/>
            </Switch>
        }
    }

    render() {
        const {isAuth} = this.props;
        return <BrowserRouter>
            {isAuth ? <RouterController.Authenticated/> : <RouterController.Unauthenticated/>}
        </BrowserRouter>;
    }
}

export default withTracker(props => ({isAuth: Meteor.userId()}))(RouterController);