import {Meteor} from "meteor/meteor";
import EMethod from "/imports/enumerables/EMethod";

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