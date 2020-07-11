import {Meteor} from "meteor/meteor";
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import {I18nextProvider} from "react-i18next";
import CssBaseline from '@material-ui/core/CssBaseline';
import "moment/locale/pt-br";

import ThemeConfig from "/client/resources/config/ThemeConfig";
import LanguageConfig from "/client/resources/config/LanguageConfig";

import Test from "/client/pages/Login";

const key = "Meteor running delay";

console.time(key)
Meteor.startup(() => {
    console.timeEnd(key);

    ReactDOM.render(
        <React.Fragment>
            <CssBaseline/>
            <I18nextProvider i18n={LanguageConfig.get()}>
                <ThemeProvider theme={ThemeConfig.get()}>
                    <Test/>
                </ThemeProvider>
            </I18nextProvider>
        </React.Fragment>,
        document.getElementById('application'));
});



