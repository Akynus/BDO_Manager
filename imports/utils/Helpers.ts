import {Meteor} from "meteor/meteor";
import EMethod from "/imports/enumerables/EMethod";
import RenownScore, {IRenownScore} from "/imports/objects/RenownScoreList";

export function countGS(gear: { atkPre: number; atkAwk?: number; defense: number; }, onlyPre: boolean = false) {
    let medium;

    if (!onlyPre) {
        medium = Math.floor((Number(gear.atkPre || 0) + Number(gear.atkAwk || 0)) / 2);
    } else {
        medium = Math.floor((Number(gear.atkPre || 0)));
    }

    const gs = Number(medium) + Number(gear.defense || 0);
    return gs;
}

export function getRenownScore(type: "AP" | "AP_AWK" | "DP", value: number = 0): number {
    let score: IRenownScore | undefined;

    switch (type) {
        case "AP":
            score = RenownScore.AP.find(val => {
                return (val.min <= value && val.max >= value);
            });
            break;
        case "AP_AWK":
            score = RenownScore.AP.find(val => {
                return (val.min <= value && val.max >= value);
            });
            break;
        case "DP":
            score = RenownScore.DP.find(val => {
                return (val.min <= value && val.max >= value);
            });
            break;
    }

    if (score) {
        return score.bonus;
    } else {
        return 0;
    }
}

export function delay(time: number = 0): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, time);
    });
}

export function timingCall(method: EMethod): Function {
    if (Meteor.isDevelopment) console.time(method);
    return () => {
        if (Meteor.isDevelopment) console.timeEnd(method);
    }
}