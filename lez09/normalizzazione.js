function normalizzazione(input) {
    let tot = 0;
    for (const k in input) {
        tot += input[k];
    }
    for (const k in input) {
        input[k] = input[k] / tot;
    }
    return;
}

const obj = { a: 2, b: 3, c: 5 };

normalizzazione(obj);
console.log(obj);
