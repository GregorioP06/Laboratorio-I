function unioneParziale(A, n) {
    // caso limite n=0
    if (n === 0) {
        return [];
    }

    // salva in quanti insiemi è presente ogni elemento
    const counter = {};

    // scorri tutti gli insiemi
    for (const ins of A) {
        // scorri tutti gli elementi dell'insieme
        for (const el in ins) {
            // se c'è già aumenta di 1, altrimenti aggiungilo a 1
            if (counter[el]) counter[el] += 1;
            else counter[el] = 1;
        }
    }

    const output = {};
    // filtra tutti i risultati secondo n
    for (const key in counter) {
        if (counter[key] >= n) output[key] = 1;
    }
    return output;
}
