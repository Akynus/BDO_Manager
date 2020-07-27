export function countGS(gear: { atkPre: number; atkAwk?: number; defense: number; }) {
    let medium

    if (!gear.atkAwk) {
        medium = Math.floor((Number(gear.atkPre || 0) + Number(gear.atkAwk || 0)) / 2);
    } else {
        medium = Math.floor((Number(gear.atkPre || 0)));
    }

    const gs = Number(medium) + Number(gear.defense || 0);
    return gs;
}