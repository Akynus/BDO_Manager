export default function RandomID(): string {
    return Math.random().toString(36).substring(2).toLowerCase();
}