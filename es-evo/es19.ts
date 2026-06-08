function classh(o: Object) {
    const res = [];
    let cur = Object.getPrototypeOf(o);
    while (cur) {
        res.unshift(cur.constructor.name);
        cur = Object.getPrototypeOf(cur);
    }
    return res;
}
