import {createMuiTheme, Theme} from '@material-ui/core/styles';

export default class ThemeConfig {
    private static readonly DEFAULT = createMuiTheme({
        palette: {
            type: "light"
        },
        shape: {
            borderRadius: 10
        }
    });

    //private static readonly USER = createMuiTheme({});

    public static get(): Theme {
        return ThemeConfig.DEFAULT;
    }
}