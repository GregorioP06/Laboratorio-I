// function stampaCifraRec(n, acc = "") {
//     if (n <= 0) return acc;

//     return stampaCifraRec(Math.floor(n / 10), (n % 10).toString() + ", " + acc);
// }
// console.log(stampaCifraRec(123456));

function stampaCifraRec(n) {
    if (n < 10) {
        console.log(n);
        return;
    }

    stampaCifraRec(Math.floor(n / 10)); // "togli" la cifra più a destra
    console.log(n % 10); // cifra più a destra
}

stampaCifraRec(17039);

// ---

function arrayCifreRec(n) {
    if (n < 10) return [n];
    return arrayCifreRec(Math.floor(n / 10)).concat(n % 10);
}

console.log(arrayCifreRec(164392));

// ---

function arrayCifreRecCoda(n, cifre = []) {
    if (n < 10) {
        cifre.unshift(n);
        return cifre;
    }
    cifre.unshift(n % 10);
    return arrayCifreRecCoda(Math.floor(n / 10), cifre);
}

console.log(arrayCifreRecCoda(1234));

// ---

function fibonacciNesimo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciNesimo(n - 1) + fibonacciNesimo(n - 2);
}

console.log(fibonacciNesimo(4));
// 0 1 1 2 3 5

//  ---

function fibonacciPrimiN(n) {
    if (n === 0) return [1];
    if (n === 1) return [1, 1];
    return fibonacciPrimiN(n - 1).concat(fibonacciNesimo(n));
}

console.log(fibonacciPrimiN(4));

// ---
function fibonacciPrimiNCoda(n, precedenti = []) {
    if (n === 0) {
        precedenti.unshift(0);
        return precedenti;
    }
    if (n === 1) {
        precedenti.unshift(1);
        return precedenti;
    }
    precedenti.unshift(fibonacciNesimo(n));
    return fibonacciPrimiNCoda(n - 1, precedenti);
}

console.log(fibonacciPrimiNCoda(6));

// ---

function ricercaLineareRecBool(el, arr) {
    if (arr.length === 0) return false;
    if (arr[0] === el) return true;
    return ricercaLineareRecBool(el, arr.slice(1));
}

console.log(ricercaLineareRecBool(3, [1, 2, 3]));
console.log(ricercaLineareRecBool(3, [1, 2, 5, 10]));

// ---

function ricercaLineareRec(el, arr, i = 0) {
    if (arr.length === 0 || i === arr.length) return null;
    if (arr[i] === el) return i;
    return ricercaLineareRec(el, arr, i + 1);
}

console.log(ricercaLineareRec(3, [1, 2, 3]));
console.log(ricercaLineareRec(3, [1, 2, 5, 10]));

// ---

function ricercaBinariaBool(el, arr) {
    if (arr.length === 0) return false;

    const i_centro = Math.floor(arr.length / 2);

    if (arr[i_centro] === el) return true;

    if (el < arr[i_centro])
        return ricercaBinariaBool(el, arr.slice(0, i_centro));

    return ricercaBinariaBool(el, arr.slice(i_centro + 1));
}

console.log(ricercaBinariaBool(3, [1, 2, 3]));
console.log(ricercaBinariaBool(3, [1, 2, 5, 10]));

// ---

function ricercaBinaria(el, arr, i = 0, j = arr.length) {
    if (i >= j) return null;
    const centro = Math.floor((i + j) / 2);
    if (arr[centro] === el) return centro;
    if (arr[centro] > el) return ricercaBinaria(el, arr, i, centro);
    return ricercaBinaria(el, arr, centro + 1, j);
}

console.log(ricercaBinaria(3, [1, 2, 3]));
console.log(ricercaBinaria(3, [1, 2, 5, 10]));
