import * as React from "react";
import Setting from "/imports/models/Setting";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Grid, Icon, IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemSecondaryAction, ListItemText, Switch,
    Typography
} from "@material-ui/core";
import {ColorResult, SwatchesPicker} from "react-color";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    dialogContentColorPalette: {
        padding: 0
    },
    colorPalette: {
        background: 'transparent',
        boxShadow: "none"
    }
}));
//</editor-folder>

export default function SettingThemingForm(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();
    const [showPalletPrimary, setShowPalletPrimary] = React.useState<boolean>(false);
    const [showPalletSecondary, setShowPalletSecondary] = React.useState<boolean>(false);

    function palletColorPrimary(): React.ReactNode {
        return <Dialog open={showPalletPrimary} onClose={() => setShowPalletPrimary(false)}>
            <DialogTitle>{t('field.primaryColor')}</DialogTitle>
            <DialogContent dividers={true} className={classes.dialogContentColorPalette}>
                <SwatchesPicker onChange={onChangePrimaryColor} className={classes.colorPalette}/>
            </DialogContent>
        </Dialog>
    }

    function palletColorSecondary(): React.ReactNode {
        return <Dialog open={showPalletSecondary} onClose={() => setShowPalletSecondary(false)}>
            <DialogTitle>{t('field.secondaryColor')}</DialogTitle>
            <DialogContent dividers={true} className={classes.dialogContentColorPalette}>
                <SwatchesPicker onChange={onChangeSecondaryColor} className={classes.colorPalette}/>
            </DialogContent>
        </Dialog>
    }

    function handleThemeStyle(): void {
        props.onChange("theming.type", props.object.theming.type == "dark" ? "light" : "dark");
    }

    function onChangePrimaryColor(color: ColorResult): void {
        setShowPalletPrimary(false);
        props.onChange("theming.primary", color.hex);
    }

    function onChangeSecondaryColor(color: ColorResult): void {
        setShowPalletSecondary(false);
        props.onChange("theming.secondary", color.hex);
    }

    return <Grid container={true} spacing={3}>
        <Grid item={true} xs={12}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.accessibility')}
            </Typography>
            <Divider/>
            <List>
                <ListItem button={true} onClick={handleThemeStyle}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-theme-light-dark'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.dark_mode')} secondary={t('description.darkModeVisibility')}/>
                    <ListItemSecondaryAction>
                        <Switch color={"secondary"} onChange={handleThemeStyle}
                                checked={props.object.theming.type == "dark"}/>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Grid>
        <Grid item={true} xs={12}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.color_layout')}
            </Typography>
            <Divider/>
            <List>
                <ListItem button={true} onClick={() => setShowPalletPrimary(true)}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-format-color-fill'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.primary_color')}/>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setShowPalletPrimary(true)}>
                            <Icon color={"primary"} className={'mdi mdi-checkbox-blank-circle'}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button={true} onClick={() => setShowPalletSecondary(true)}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-format-color-fill'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.secondary_color')}/>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setShowPalletSecondary(true)}>
                            <Icon color={"secondary"} className={'mdi mdi-checkbox-blank-circle'}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Grid>
        {palletColorPrimary()}
        {palletColorSecondary()}
    </Grid>
}

interface IProps {
    onChange: (key: string, value: any) => void;
    object: Setting;
}