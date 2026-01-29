function innesta(T1, v1, T2, v2) {
    const parent1 = ricercaInKario(T1, v1);
    const pos1 = parent1.figli.findIndex((x) => x.val === v1);
    const parent2 = ricercaInKario(T2, v2);
    const pos2 = parent2.figli.findIndex((x) => x.val === v2);

    [parent1.figli[pos1], parent2.figli[pos2]] = [
        parent2.figli[pos2],
        parent1.figli[pos1],
    ];
}

function ricercaInKario(t, n) {
    if (!t || !t.figli) return false;

    for (f of t.figli) {
        if (f.val === n) return t;
    }

    for (f of t.figli) {
        t = ricercaInKario(f, n);
        if (t) return t;
    }
}

const T1 = {
    val: 1,
    figli: [{ val: 2 }, { val: 3 }],
};

const T2 = {
    val: 10,
    figli: [
        { val: 11 },
        {
            val: 12,
            figli: [{ val: 13 }, { val: 14 }],
        },
    ],
};

innesta(T1, 2, T2, 12);

console.log(T1);
console.log(T2);
