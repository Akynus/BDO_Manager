import * as React from "react";
import {CssBaseline} from "@material-ui/core";
import {I18nextProvider} from "react-i18next";
import LanguageConfig from "/client/resources/config/LanguageConfig";
import Theme from "/client/resources/theming";
import {SnackbarProvider} from "notistack";

const Core: React.FunctionComponent = function (props) {
    return <React.Fragment>
        <CssBaseline/>
        <I18nextProvider i18n={LanguageConfig.get()}>
            <Theme>
                <SnackbarProvider maxSnack={3}>
                    {props.children}
                </SnackbarProvider>
            </Theme>
        </I18nextProvider>
    </React.Fragment>
}

export default Core;