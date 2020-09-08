import * as React from "react";
import Setting from "/imports/models/Setting";
import {
    Avatar,
    Divider,
    Grid,
    Icon,
    List,
    ListItem, ListItemAvatar,
    ListItemIcon,
    ListItemText, Menu, MenuItem,
    Typography
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import LanguageContext from "/imports/objects/LanguageContext";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    avatarFlag: {
        height: 25,
        width: 40,
        objectFit: 'cover'
    }
}), {classNamePrefix: 'setting-general'});
//</editor-folder>

export default function SettingGeneralForm(props: IProps): React.ReactElement<IProps> {
    const {t} = useTranslation();
    const classes = useStyles();
    const [showLanguageSelect, setShowLanguageSelect] = React.useState<boolean>(false);

    function onOpenLanguage(): void {
        setShowLanguageSelect(true);
    }

    function onCloseLanguage(): void {
        setShowLanguageSelect(false);
    }

    function onChange(key: string, value: any): void {
        setShowLanguageSelect(false);
        props.onChange(key, value);
    }

    function menuLanguage(): React.ReactNode {
        return <Menu anchorEl={document.getElementById("language-text-value")!} keepMounted={true}
                     open={showLanguageSelect} onClose={onCloseLanguage} PaperProps={{
            style: {
                maxHeight: 300
            }
        }}>
            {Object.keys(LanguageContext).map(value => {
                return <MenuItem key={LanguageContext[value].value}
                                 onClick={() => onChange('general.language', LanguageContext[value].value)}>
                    <ListItem dense={true}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatarFlag} variant={"square"}
                                    src={LanguageContext[value].icon}/>
                        </ListItemAvatar>
                        <ListItemText primary={t(LanguageContext[value].name)}/>
                    </ListItem>
                </MenuItem>
            })}
        </Menu>
    }

    return <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} spacing={1}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.language_and_region')}
            </Typography>
            <Divider/>
            <List>
                <ListItem button={true} onClick={onOpenLanguage}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-translate'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.language')}
                                  secondary={t('description.setting.language')}/>
                    <Typography id={'language-text-value'} variant={"subtitle2"}
                                color={"textSecondary"}>{t(LanguageContext[props.object.general.language].name)}</Typography>
                </ListItem>
                <ListItem button={true}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-calendar-clock'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.region')}
                                  secondary={t('description.setting.region')}/>
                    <Typography variant={"subtitle2"} color={"textSecondary"}>+ 04:00</Typography>
                </ListItem>
            </List>
        </Grid>
        {menuLanguage()}
    </Grid>
}

interface IProps {
    onChange: (key: string, value: any) => void;
    object: Setting;
}