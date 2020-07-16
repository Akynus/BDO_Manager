import * as React from "react";
import {createMuiTheme, Theme, ThemeProvider} from '@material-ui/core/styles';
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";
import {Overrides} from "@material-ui/core/styles/overrides";
import {TypographyOptions} from "@material-ui/core/styles/createTypography";
import {PaletteOptions} from "@material-ui/core/styles/createPalette";

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
            MuiCardContent: {
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
            fontFamily: 'Poppins, Arial',
        }
    }

    private palette(): PaletteOptions {
        const {themeStyle, primaryColor, secondaryColor} = this.props;

        return {
            type: themeStyle,
            primary: {
                main: primaryColor,
            },
            secondary: {
                main: secondaryColor,
            }
        }
    }

    private get(): Theme {
        return createMuiTheme({
            palette: this.palette(),
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
        themeStyle: Session.get(SessionKeys.THEME_STYLE),
        primaryColor: Session.get(SessionKeys.PRIMARY_COLOR),
        secondaryColor: Session.get(SessionKeys.SECONDARY_COLOR)
    }
})(ThemeController);

interface IProps {
    themeStyle: "dark" | "light";
    primaryColor: string;
    secondaryColor: string;
}