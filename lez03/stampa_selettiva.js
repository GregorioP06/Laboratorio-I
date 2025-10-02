// Si scriva un programma che legga da tastiera degli interi e stampi l’elemento letto se rispetta una delle seguenti proprietà: (i) E’ positivo e pari, oppure (ii) è negativo e preceduto (nell’ordine di inserimento) da un intero con valore maggiore o uguale. Terminare la l’acquisizione alla lettura di uno zero.

let last = NaN;
let n = NaN;
do {
    n = Number(prompt());
    if ((n > 0 && n % 2 == 0) || (n < 0 && last >= n)) {
        console.log(n);
        last = n;
    }
} while (n !== 0);
