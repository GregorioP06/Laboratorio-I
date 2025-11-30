function math(op, ...nums) {
    if (op === "+") return nums.reduce((tot, curr) => tot + curr);
    if (op === "-") return nums.reduce((tot, curr) => tot - curr);
    if (op === "*") return nums.reduce((tot, curr) => tot * curr);
    if (op === "/") return nums.reduce((tot, curr) => tot / curr);
}

console.log(math("+", 4, 2, 7));
console.log(math("-", 10, 1, 7));
console.log(math("/", 8, 2, 2, 2));
console.log(math("*", 1, 2, 3, 4));
