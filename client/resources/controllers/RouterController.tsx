import * as React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {withTracker} from "meteor/react-meteor-data";

import HomePage from "/client/pages/Home";
import LoginPage from "/client/pages/Login";

class RouterController extends React.Component<{ isAuth: string | null }> {

    static Authenticated = class extends React.Component<any, any> {
        render() {
            return <Switch>
                <Route exact={true} path={'/home'} component={HomePage}/>

                <Redirect exact={true} path={'/'} to={'/home'}/>
                <Redirect to={'/'}/>
            </Switch>
        }
    }

    static Unauthenticated = class extends React.Component<any, any> {
        render() {
            return <Switch>
                <Route exact={true} path={'/login'} component={LoginPage}/>

                <Redirect exact={true} path={'/'} to={'/login'}/>
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