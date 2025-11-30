function somma(...nums) {
    return nums.reduce((tot, cur) => tot + cur);
}

console.log(somma(5, 7, 2));
console.log(somma(3));
console.log(somma(10, 5, -8, -7));
