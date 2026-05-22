function classh(o: object): string[] {
    const res: string[] = [];
    let x: object | null = o;

    while (x) {
        const p = Object.getPrototypeOf(x);
        if (p) {
            res.unshift(p.constructor.name);
        }
        x = p;
    }
    return res;
}
