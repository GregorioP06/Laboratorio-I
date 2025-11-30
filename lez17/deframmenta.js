function deframmenta(a) {
    // se (l'elemento corrente è uguale a quello prima o è uguale a quello dopo) -> tienilo
    return a.filter((val, i) => val === a[i - 1] || val === a[i + 1]);
}

console.log(deframmenta([1, 1, 2, 3, 3, 3, 2, 2, 4]));
console.log(deframmenta([0, 0, 0, 0, 0, 1, 0, 1, 1]));
console.log(deframmenta([1, 0]));
