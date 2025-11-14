function is_partizione(insiemi, A) {
    // Sottoinsiemi non vuoti
    if (!insiemi.every((x) => Object.keys(x).length !== 0)) {
        return false;
    }

    // Disgiunti a coppie
    for (let i = 0; i < insiemi.length - 1; i++) {
        for (let j = i + 1; j < insiemi.length; j++) {
            for (const el1 in insiemi[i]) {
                for (const el2 in insiemi[j]) {
                    if (el1 === el2) return false;
                }
            }
        }
    }

    // Unione uguale ad A
    let unione = {};
    for (const insieme of insiemi) {
        for (const el in insieme) {
            unione[el] = true;
        }
    }

    for (const el in unione) {
        if (!(el in A)) return false;
    }
    for (const el in A) {
        if (!(el in unione)) return false;
    }

    return true;
}

console.log(
    is_partizione(
        [
            { a: true, b: true },
            { c: true, d: true },
            { e: true },
            { f: true },
            // { a: true },
            // {},
        ],
        {
            a: true,
            b: true,
            c: true,
            d: true,
            e: true,
            f: true,
            // z: true,
        }
    )
);
