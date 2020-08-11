import * as React from "react";
import {createMuiTheme, Theme, ThemeProvider} from '@material-ui/core/styles';
import {Overrides} from "@material-ui/core/styles/overrides";
import {TypographyOptions} from "@material-ui/core/styles/createTypography";
import {PaletteOptions} from "@material-ui/core/styles/createPalette";
import Settings from "/imports/collections/SettingCollection";
import Setting from "/imports/models/Setting";
import {useMongoFetch} from "react-meteor-hooks";

const Theming: React.FunctionComponent = function (props) {
    const settings: Setting[] = useMongoFetch(Settings.find());

    function getSetting(): Setting {
        const setting = new Setting();
        setting.theming = {
            type: "light",
            primary: '#5c6bc0',
            secondary: '#2196f3'
        }

        return settings[0] || setting;
    }

    function override(): Overrides {
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

    function typography(): TypographyOptions {
        return {
            //fontFamily: 'Poppins, Arial',
        }
    }

    function palette(): PaletteOptions {
        return {
            type: getSetting().theming.type,
            primary: {
                main: getSetting().theming.primary,
            },
            secondary: {
                main: getSetting().theming.secondary,
            },
            background: getSetting().theming.type == "dark" ? {
                default: '#404040',
                paper: '#575757'
            } : {
                default: '#EFEFEF',
                paper: '#FFFFFF'
            }
        }
    }

    function get(): Theme {
        return createMuiTheme({
            palette: palette(),
            shape: {
                borderRadius: 6
            },
            typography: typography(),
            overrides: override()
        });
    }

    return <ThemeProvider theme={get()}>
        {props.children}
    </ThemeProvider>
}

export default Theming;