function matricolaValida(m) {
    const pattern = /^\d{6}$/;
    return pattern.test(m);
}

console.log(matricolaValida("01234"));
console.log(matricolaValida("A01234"));
console.log(matricolaValida("012345"));
