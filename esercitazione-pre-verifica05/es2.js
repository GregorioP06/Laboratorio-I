class NodoBinario {
    constructor(val, left, right) {
        if (Number(val) !== val) throw new TypeError();
        this.val = val;

        if (left !== undefined) {
            if (left instanceof NodoBinario || left === null) this.left = left;
            else throw new TypeError();
        }

        if (right !== undefined) {
            if (right instanceof NodoBinario || right === null)
                this.right = right;
            else throw new TypeError();
        }
    }
}

function* foglieConProfondita(radice) {
    yield* gen(radice, 0);
}

function* gen(t, p) {
    if (t) {
        if (!t.left && !t.right) yield [p, t.val];
        yield* gen(t.left, p + 1);
        yield* gen(t.right, p + 1);
    }
}

Map.prototype.incrementa = function (key, amount) {
    if (!this.has(key)) this.set(key, amount);
    else this.set(key, this.get(key) + amount);

    return this;
};

Map.sommaFogliePerProfondita = (radice) => {
    const m = new Map();
    if (radice === null) return m;
    for (const f of foglieConProfondita(radice)) {
        m.incrementa(f[0], f[1]);
    }
    return m;
};
