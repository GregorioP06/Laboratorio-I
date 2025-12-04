// Si scriva una funzione JavaScript ack(p,q) (con p e q numeri naturali) così definita: è uguale a: q+1 se p vale 0; a ack(p-1, 1) se q vale 0; e ack(p-1, ack(p,q-1)) altrimenti.
function ack(p, q) {
    if (p === 0) return q + 1;
    if (q === 0) return ack(p - 1, 1);
    return ack(p - 1, ack(p, q - 1));
}

// let albero = {
//     val: 1,
//     sx: {
//         val: 2,
//     },
//     dx: {
//         val: 3,
//         sx: { val: 11 },
//     },
// };
function contaDispari(t) {
    if (t) {
        if (t.val % 2 === 1) return 1 + contaDispari(t.sx) + contaDispari(t.dx);
        return contaDispari(t.sx) + contaDispari(t.dx);
    }
    return 0;
}
// console.log(contaDispari(albero));

function tagliaRami(t, v) {
    if (t) {
        for (const i in t.figli) {
            if (t.figli[i].val % v === 0) t.figli[i] = null;
            else tagliaRami(t.figli[i], v);
        }
        if (t.figli) t.figli = t.figli.filter((x) => x);
    }
}

function valuta(t) {
    if (t) {
        if (t.figli) {
            let peso_figli = 0;
            for (let i in t.figli) {
                peso_figli += valuta(t.figli[i]);
            }
            return t.val(peso_figli);
        }
        return t.val;
    }
}
