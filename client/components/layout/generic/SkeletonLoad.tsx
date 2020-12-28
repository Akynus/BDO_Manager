import * as React from "react";
import {Box, Grid} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

function SkeletonCard(): React.ReactElement {
    return <Box width={'100%'}>
        <Skeleton variant="rect" width={'100%'} height={156}/>
        <Box pt={0.5}>
            <Skeleton/>
            <Skeleton width="60%"/>
        </Box>
    </Box>
}


export default class SkeletonLoad extends React.Component {
    static Card = SkeletonCard;

    render() {
        const children = React.Children.toArray(this.props.children);

        return <Grid container={true} spacing={2}>
            {children.map((child: React.ReactElement) => (
                <Grid lg={3} md={4} sm={6} xs={12} item={true}>{child}</Grid>
            ))}
        </Grid>
    }
}