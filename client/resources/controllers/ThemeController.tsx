import * as React from "react";
import {createMuiTheme, Theme, ThemeProvider} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";

class ThemeController extends React.Component<IProps, any> {
    private get(): Theme {
        const {themeStyle} = this.props;
        return createMuiTheme({
            palette: {
                type: themeStyle,
                primary: {
                    main: indigo["500"],
                    light: indigo["700"],
                    dark: indigo["A400"]
                },
                secondary: {
                    main: blue["500"],
                    light: blue["700"],
                    dark: blue["A400"]
                }
            },
            shape: {
                borderRadius: 6
            },
            typography: {
                fontFamily: 'Nunito, Arial',
            },
        });
    }

    render() {
        return <ThemeProvider theme={this.get()}>
            {this.props.children}
        </ThemeProvider>;
    }
}

export default withTracker<any, IProps>((props) => {
    return {
        themeStyle: Session.get(SessionKeys.THEME_STYLE)
    }
})(ThemeController);

interface IProps {
    themeStyle: "dark" | "light"
}