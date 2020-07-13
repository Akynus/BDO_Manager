import {Meteor} from "meteor/meteor";
import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from "react-i18next";
import CssBaseline from '@material-ui/core/CssBaseline';
import RouterController from "/client/resources/controllers/RouterController";
import ThemeController from "/client/resources/controllers/ThemeController";

import "/client/resources/Initialization";
import "moment/locale/pt-br";

import LanguageConfig from "/client/resources/config/LanguageConfig";

Meteor.startup(() => {
    ReactDOM.render(
        <React.Fragment>
            <CssBaseline/>
            <I18nextProvider i18n={LanguageConfig.get()}>
                <ThemeController>
                    <RouterController/>
                </ThemeController>
            </I18nextProvider>
        </React.Fragment>,
        document.getElementById('application'));
});



