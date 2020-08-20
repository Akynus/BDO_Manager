import * as React from "react";
import {
    Avatar,
    Card, CardContent,
    Icon,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, Typography
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    avatarColor: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
    }
}));
//</editor-folder>

export default function ProfileBiographyCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    return <Card elevation={10}>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatarColor}>
                    <Icon className={'mdi mdi-book-open-page-variant'} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={'Biografia'} secondary={''}/>
            <ListItemSecondaryAction>
                <IconButton>
                    <Icon className={'mdi mdi-pencil'} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Delegadis gente finis, bibendum egestas augue arcu ut est. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Sapien in monti palavris qui num significa nadis i pareci latim.
                Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Casamentiss faiz malandris se pirulitá. Suco de cevadiss deixa as pessoas mais interessantis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
            </Typography>
        </CardContent>
    </Card>
}

interface IProps {
}