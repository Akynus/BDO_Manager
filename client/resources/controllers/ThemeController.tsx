import * as React from "react";
import {createMuiTheme, Theme, ThemeProvider} from '@material-ui/core/styles';
import {withTracker} from "meteor/react-meteor-data";
import {Overrides} from "@material-ui/core/styles/overrides";
import {TypographyOptions} from "@material-ui/core/styles/createTypography";
import {PaletteOptions} from "@material-ui/core/styles/createPalette";
import Settings from "/imports/collections/SettingCollection";
import Setting from "/imports/models/Setting";

class ThemeController extends React.Component<IProps, any> {

    private override(): Overrides {
        return {
            MuiIcon: {
                root: {
                    fontSize: '1.2rem',
                    minWidth: '1em',
                    width: "auto"
                }
            },
            MuiListItem: {
                container: {
                    display: "block"
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
            //fontFamily: 'Poppins, Arial',
        }
    }

    private palette(): PaletteOptions {
        const {setting} = this.props;

        return {
            type: setting.theming.type,
            primary: {
                main: setting.theming.primary,
            },
            secondary: {
                main: setting.theming.secondary,
            },
            background: setting.theming.type == "dark" ? {
                default: '#404040',
                paper: '#575757'
            } : {
                default: '#EFEFEF',
                paper: '#FFFFFF'
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

export default withTracker<any, IProps>(() => {
    const defaultSetting = new Setting();
    defaultSetting.theming = {
        type: "light",
        primary: '#5c6bc0',
        secondary: '#2196f3'
    }

    return {
        setting: Settings.findOne() || defaultSetting
    }
})(ThemeController);

interface IProps {
    setting: Setting;
}