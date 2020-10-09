import * as React from "react";
import {Box, Chip, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import RenownScoreList, {IRenownScore} from "/imports/objects/RenownScoreList";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {getRenownScore} from "/imports/utils/Helpers";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    box: {
        height: 250,
        overflowY: 'auto'
    }
}), {classNamePrefix: 'renown-score-table'});

function TableAP(score: number): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();

    function buildRow(data: IRenownScore, index: number): React.ReactNode {

        const isCurrent = (getRenownScore("AP", score) == data.bonus);

        return <TableRow id={String(data.bonus)} key={index} selected={isCurrent}>
            <TableCell align={"center"}>
                {isCurrent && <Chip size={"small"} color={"secondary"} label={'Atual'}/>}
            </TableCell>
            <TableCell align={"center"}>{`${data.min}-${data.max}`}</TableCell>
            <TableCell align={"right"}>{`+${data.bonus}`}</TableCell>
        </TableRow>
    }

    return <Box className={classes.box}>
        <Table stickyHeader={true} size={"small"}>
            <TableHead>
                <TableRow>
                    <TableCell/>
                    <TableCell/>
                    <TableCell align={"right"}>{t('field.characters.score_bonus')}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {RenownScoreList.AP.map(buildRow)}
            </TableBody>
        </Table>
    </Box>
}

function TableDP(score: number): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();

    function buildRow(data: IRenownScore, index: number): React.ReactNode {

        const isCurrent = (getRenownScore("DP", score) == data.bonus);

        return <TableRow id={String(data.bonus)} key={index} selected={isCurrent}>
            <TableCell align={"center"}>
                {isCurrent && <Chip size={"small"} color={"secondary"} label={'Atual'}/>}
            </TableCell>
            <TableCell align={"center"}>{`${data.min}-${data.max}`}</TableCell>
            <TableCell align={"right"}>{`${data.bonus}%`}</TableCell>
        </TableRow>
    }

    return <Box className={classes.box}>
        <Table stickyHeader={true} size={"small"}>
            <TableHead>
                <TableRow>
                    <TableCell/>
                    <TableCell/>
                    <TableCell align={"right"}>{t('field.characters.score_bonus')}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {RenownScoreList.DP.map(buildRow)}
            </TableBody>
        </Table>
    </Box>
}

export default function RenownScoreTable(props: IProps): React.ReactElement<IProps> {
    switch (props.type) {
        case "AP":
            return TableAP(props.score);
        case "AP_AWK":
            return TableAP(props.score);
        case "DP":
            return TableDP(props.score);
    }
}

interface IProps {
    type: "AP" | "AP_AWK" | "DP";
    score: number;
}