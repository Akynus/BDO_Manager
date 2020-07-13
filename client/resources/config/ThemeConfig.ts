import {createMuiTheme, Theme} from '@material-ui/core/styles';

export default class ThemeConfig {
    private static readonly DEFAULT = createMuiTheme({
        palette: {
            type: "dark"
        },
        shape: {
            borderRadius: 6
        },
        typography: {
            fontFamily: 'Nunito, Arial',
        },
    });

    //private static readonly USER = createMuiTheme({});

    public static get(): Theme {
        return ThemeConfig.DEFAULT;
    }
}