const albero = {
    val: 3,
    sx: {
        val: 2,
        sx: {
            val: 4,
            sx: null,
            dx: null,
        },
        dx: {
            val: 1,
            sx: {
                val: 6,
                sx: null,
                dx: null,
            },
            dx: null,
        },
    },
    dx: {
        val: 7,
        sx: null,
        dx: {
            val: 1,
            sx: null,
            dx: null,
        },
    },
};

function visitaAnticipata(t) {
    if (t) {
        console.log(t.val);
        visitaAnticipata(t.sx);
        visitaAnticipata(t.dx);
    }
}

function visitaPosticipata(t) {
    if (t) {
        visitaPosticipata(t.sx);
        visitaPosticipata(t.dx);
        console.log(t.val);
    }
}

function maxAlbero(t) {
    if (!t) return -Infinity;
    return Math.max(t.val, maxAlbero(t.sx), maxAlbero(t.dx));
}

function sommaAlbero(t) {
    if (!t) return 0;
    return t.val + sommaAlbero(t.sx) + sommaAlbero(t.dx);
}

function ricercaInAlbero(t, n) {
    if (!t) return false;
    if (t.val === n) return true;
    return ricercaInAlbero(t.sx, n) || ricercaInAlbero(t.dx, n);
}

function contaInAlbero(t, n) {
    if (!t) return 0;
    if (t.val === n) return 1 + contaInAlbero(t.sx, n) + contaInAlbero(t.dx, n);
    return contaInAlbero(t.sx, n) + contaInAlbero(t.dx, n);
}

function scambiaRami(t) {
    if (t) {
        [t.sx, t.dx] = [t.dx, t.sx];
        scambiaRami(t.sx);
        scambiaRami(t.dx);
    }
}

function tagliaRami(t, n) {
    if (t) {
        if (t.sx && t.sx.val === n) t.sx = null;
        if (t.dx && t.dx.val === n) t.dx = null;

        if (t.sx) tagliaRami(t.sx, n);
        if (t.dx) tagliaRami(t.dx, n);
    }
}

console.log("Visita anticipata");
visitaAnticipata(albero);

console.log("Visita posticipata");
visitaPosticipata(albero);

console.log("Max");
console.log(maxAlbero(albero));

console.log("Somma albero");
console.log(sommaAlbero(albero));

console.log("Ricerca in albero");
console.log(ricercaInAlbero(albero, 7));

console.log("Conta in albero");
console.log(contaInAlbero(albero, 1));

console.log("Scambio rami");
scambiaRami(albero);
visitaAnticipata(albero);

console.log("Taglia rami");
tagliaRami(albero, 1);
visitaAnticipata(albero);
