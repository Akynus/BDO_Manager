import * as React from "react";
import {createMuiTheme, Theme, ThemeProvider} from '@material-ui/core/styles';
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";
import {Overrides} from "@material-ui/core/styles/overrides";
import {TypographyOptions} from "@material-ui/core/styles/createTypography";

class ThemeController extends React.Component<IProps, any> {

    private override(): Overrides {
        const {themeStyle} = this.props;
        return {
            MuiIcon: {
                root: {
                    fontSize: '1.2rem',
                    minWidth: '1em',
                    width: "auto"
                }
            },
            MuiCard: {
                root: {
                    background: themeStyle == "dark" ? 'rgba(255, 255, 255, 0.15)' : '#FFFFFF'
                }
            },
            MuiListItemIcon: {
                root: {
                    marginLeft: 10
                }
            }
        }
    }

    private typography(): TypographyOptions {
        return {
            fontFamily: 'Nunito, Arial',
        }
    }

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
            typography: this.typography(),
            overrides: this.override()
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