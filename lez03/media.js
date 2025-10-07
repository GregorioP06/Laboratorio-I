// comando sbagliato
// Si scriva un programma che legga da tastiera 10 interi e stampi la media aritmetica di tutti i valori diversi da zero e di segno uguale al valore precedente della sequenza.

let tot = 0;
let count = 0;
let last = NaN;

for (let i = 0; i < 10; i++) {
    let n = Number(prompt());
    // console.log("Input: " + n);

    if (n !== 0 && last * n > 0) {
        tot += n;
        count += 1;
        // console.log("Valido: " + n);
    }
    last = n;
}

console.log(`Media di ${count} numeri validi: ${tot / count}`);
