function calc1(a) {
    const [op, ...nums] = a;
    switch (op) {
        case "+":
            return nums.reduce((acc, cur) => acc + cur);
        case "-":
            return nums.reduce((acc, cur) => acc - cur);
        case "*":
            return nums.reduce((acc, cur) => acc * cur);
        case "/":
            return nums.reduce((acc, cur) => acc / cur);
    }
}

console.log(calc1(["+", 12, 4, 3]));
console.log(calc1(["-", 12, 4, 3]));
console.log(calc1(["*", 12, 4, 3]));
console.log(calc1(["/", 12, 4, 3]));

function calcAll(...e) {
    return e.map(calc1);
}

console.log(calcAll(["+", 1, 2, 3], ["-", 3, 2, 1]));
