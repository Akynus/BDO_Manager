import * as React from "react";
import {Avatar, Card, CardActionArea, Icon, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        width: 40,
        height: 40,
        color: theme.palette.getContrastText(theme.palette.primary.main)
    }
}), {classNamePrefix: 'insert-card-button'});

export default function InsertCardButton(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    return <Card className={classes.root} elevation={0}>
        <CardActionArea className={classes.root}>
            <Avatar className={classes.avatar}>
                <Icon className={'mdi mdi-plus-thick'}/>
            </Avatar>
            <Typography variant={"h6"} color={"textPrimary"}>{props.label}</Typography>
            <Typography variant={"subtitle2"} align={"center"} color={"textSecondary"}>{props.description}</Typography>
        </CardActionArea>
    </Card>
}

interface IProps {
    label: string;
    description: string;

    onClick(): void;
}