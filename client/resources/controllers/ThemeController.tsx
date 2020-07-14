import * as React from "react";
import {createMuiTheme, Theme, ThemeProvider} from '@material-ui/core/styles';
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";

class ThemeController extends React.Component<IProps, any> {
    private get(): Theme {
        const {themeStyle} = this.props;
        return createMuiTheme({
            palette: {
                type: themeStyle,
                primary: {
                    main: "#3f51b5",
                },
                secondary: {
                    main: "#2979ff",
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