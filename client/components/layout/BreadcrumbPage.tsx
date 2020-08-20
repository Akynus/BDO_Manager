import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Box, Breadcrumbs, Chip, Icon, Typography} from "@material-ui/core";
import clsx from "clsx";
// @ts-ignore
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {useTranslation} from "react-i18next";
import ERoutes from "/imports/enumerables/ERoutes";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    iconHome: {
        width: theme.typography.pxToRem(22),
        fontSize: theme.typography.pxToRem(18),
        paddingLeft: theme.spacing(0.5)
    }
}));

const AboutLogin: React.FunctionComponent<IProps> = function (props) {
    const classes = useStyles();
    const {t} = useTranslation();

    function goPath(path: string): void {
        FlowRouter.go(path);
    }

    function currentPath(): string {
        const current = FlowRouter.current();
        return current.route.name;
    }

    return <Box component={"div"}>
        <Typography color={"textPrimary"} variant={"h5"}>
            {props.title}
        </Typography>
        <Breadcrumbs>
            <Chip onClick={() => goPath(ERoutes.HOME)} variant={"outlined"} size={"small"}
                  icon={<Icon className={clsx(['mdi mdi-home', classes.iconHome])}/>}
                  label={t('item.home')}/>
            <Chip variant={"outlined"} size={"small"} label={t(`item.${currentPath()}`)}/>
        </Breadcrumbs>
    </Box>;
}

interface IProps {
    title: any;
}

export default AboutLogin;