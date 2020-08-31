import * as React from "react";
import {
    Avatar,
    Card,
    Icon,
    IconButton,
    ListItem,
    ListItemAvatar, ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, Menu, MenuItem
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    avatarColor: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
        objectFit: 'cover'
    }
}));
//</editor-folder>

export default function ProfileGuildCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const [target, setTarget] = React.useState<Element | null>(null);

    function openGuildMenu(ev: React.MouseEvent<HTMLButtonElement>): void {
        setTarget(ev.currentTarget);
    }

    function guildMenu(): React.ReactNode {
        return <Menu id="fade-menu" keepMounted={true} anchorEl={target}
                     open={Boolean(target)}
                     onClose={() => setTarget(null)}>
            <MenuItem>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'mdi mdi-monitor-dashboard'}/>
                </ListItemIcon>
                <ListItemText primary={'Painel da Guilda'}/>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Icon color={"error"} fontSize={"small"} className={'mdi mdi-logout-variant'}/>
                </ListItemIcon>
                <ListItemText primary={'Sair da Guilda'}/>
            </MenuItem>
        </Menu>
    }

    return <Card elevation={10}>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatarColor}
                        src={'https://64.media.tumblr.com/d80fa1123b77a6929828e124de95a1d1/9d1ee33f29161cce-df/s400x600/f20dfd5ade8014689756ad9f2bfb21b0f052bb1b.png'}/>
            </ListItemAvatar>
            <ListItemText primaryTypographyProps={{noWrap: true}} primary={'CDW'} secondary={'Membro da Guilda'}/>
            <ListItemSecondaryAction>
                <IconButton onClick={openGuildMenu}>
                    <Icon className={'mdi mdi-dots-vertical'}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        {guildMenu()}
    </Card>
}

interface IProps {
}