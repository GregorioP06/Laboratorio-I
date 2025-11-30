function partapply(bop, a) {
    return (b) => bop(a, b);
}

const r = partapply((x, y) => x + y, 1);
console.log(r(5));

const s = partapply((x, y) => x + y, "d");
console.log(s("esisto"));
