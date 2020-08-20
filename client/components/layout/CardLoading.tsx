import * as React from "react";
import {Avatar, Card, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

export default function CardLoading(props: IProps): React.ReactElement<IProps> {
    return <Card elevation={10}>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Skeleton animation="wave" variant="circle" width={40} height={40}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Skeleton animation="wave" height={24} width="80%"/>}
                          secondary={<Skeleton animation="wave" height={20} width="60%"/>}/>
        </ListItem>
    </Card>
}

interface IProps {}