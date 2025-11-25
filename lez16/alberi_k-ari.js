/* albero-kario
        3
    1   7   10
   2 3 5 5
*/

const albero_kario = {
    val: 3,
    figli: [
        {
            val: 1,
            figli: [{ val: 2 }, { val: 3 }],
        },
        { val: 7, figli: [{ val: 5 }, { val: 5 }] },
        { val: 10 },
    ],
};

function maxKAlbero(t) {
    if (!t) return -Infinity;
    let max = t.val;
    if (t.figli) {
        for (const figlio of t.figli) {
            max = Math.max(max, maxKAlbero(figlio));
        }
    }
    return max;
}

function ricercaInKario(t, n) {
    if (!t) return false;
    if (t.val === n) return true;
    if (t.figli) {
        for (const figlio of t.figli) {
            if (ricercaInKario(figlio, n)) return true;
        }
    }
    return false;
}

function applicaF(t, f) {
    if (t) {
        t.val = f(t.val);
        if (t.figli) {
            for (let i = 0; i < t.figli.length; i++) {
                applicaF(t.figli[i], f);
            }
        }
    }
}

console.log("Max albero k-ario");
console.log(maxKAlbero(albero_kario));

console.log("Ricerca in albero k-ario");
console.log(ricercaInKario(albero_kario, 5));

console.log("Applica f a albero k-ario");
applicaF(albero_kario, (x) => x * 2);
