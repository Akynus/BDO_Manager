import * as React from "react";
import {CssBaseline} from "@material-ui/core";
import {I18nextProvider} from "react-i18next";
import Language from "/client/resources/language";
import Theme from "/client/resources/theming";
import {SnackbarProvider} from "notistack";
import AppLayout from "/client/components/main/AppLayout";

const Core: React.FunctionComponent<IProps> = function (props) {

    function body(): React.ReactNode {
        if (props.layout) {
            return <AppLayout>
                {props.children}
            </AppLayout>
        } else {
            return props.children;
        }
    }

    return <React.Fragment>
        <CssBaseline/>
        <I18nextProvider i18n={Language.get()}>
            <Theme>
                <SnackbarProvider maxSnack={3}>
                    {body()}
                </SnackbarProvider>
            </Theme>
        </I18nextProvider>
    </React.Fragment>
}

interface IProps {
    layout: boolean;
}

export default Core;