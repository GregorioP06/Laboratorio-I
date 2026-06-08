function sanitize(obj: { [k: string]: any }, drop: string[]): void {
    for (const key of Object.keys(obj)) {
        if (drop.includes(key)) {
            delete obj[key];
        }
    }
    for (const val of Object.values(obj)) {
        if (val instanceof Object) {
            sanitize(val, drop);
        }
    }
}
