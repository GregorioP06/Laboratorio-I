function filteredSet(S, p) {
    const res = {};
    let counter = 0;

    for (const el in S) {
        if (p(el)) {
            res[el] = S[el];
        } else counter += S[el];
    }
    return [res, counter];
}

const test = { a: 1, b: 2, c: 13, d: 15 };
const p = (x) => {
    const ok = ["a", "c"];
    return ok.includes(x);
};

const r = filteredSet(test, p);
console.log(r);
