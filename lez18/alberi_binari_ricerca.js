const albero = {
    val: 6,
    sx: {
        val: 5,
        sx: {
            val: 2,
        },
        dx: {
            val: 5,
        },
    },
    dx: {
        val: 7,
        dx: {
            val: 8,
        },
    },
};

function visitaSimmetrica(t) {
    if (t) {
        visitaSimmetrica(t.sx);
        console.log(t.val);
        visitaSimmetrica(t.dx);
    }
}

function abrStampaCrescente(t) {
    visitaSimmetrica(t);
}

function abrStampaDecrescente(t) {
    if (t) {
        abrStampaDecrescente(t.dx);
        console.log(t.val);
        abrStampaDecrescente(t.sx);
    }
}

function abrArray(t) {
    if (t) {
        return abrArray(t.sx).concat([t.val]).concat(abrArray(t.dx));
        // return [...abrArray(t.sx), t.val, ...abrArray(t.dx)];
    }
    return [];
}

function abrMassimo(t) {
    if (t) {
        if (t.dx) return abrMassimo(t.dx);
        else return t.val;
    } else return null;
}

function abrCerca(t, v) {
    if (t) {
        if (t.val === v) return t;
        else if (v > t.val) return abrCerca(t.dx, v);
        else return abrCerca(t.sx, v);
    } else return null;
}

function abrInserisci(t, v) {
    if (!t) return { val: v };

    if (v > t.val) {
        if (t.dx) abrInserisci(t.dx, v);
        else t.dx = { val: v };
    } else {
        if (t.sx) abrInserisci(t.sx, v);
        else t.sx = { val: v };
    }
    return t;
}

function abrVerifica(t) {
    if (!t) return true;

    if (t.dx && t.val > t.dx.val) return false;
    if (t.sx && t.val < t.sx.val) return false;

    return abrVerifica(t.dx) && abrVerifica(t.sx);
}

console.log("stampa crescente");
abrStampaCrescente(albero);

console.log("stampa decrescente");
abrStampaDecrescente(albero);

console.log("array ordinato");
console.log(abrArray(albero));

console.log("max");
console.log(abrMassimo(albero));

console.log("ricerca");
console.log(abrCerca(albero, 5));

console.log("inserimento (in-place)");
abrInserisci(albero, 7.5);

console.log("verifica");
console.log(abrVerifica(albero));
console.log(abrVerifica({ val: 10, sx: { val: 11 } }));
console.log(abrVerifica({}));
