function f(x) {
    return x ** 3 - 6 * x ** 2 + 11 * x - 6;
}

let start = 1;
let end = 4;
let min = null;
let max = null;

for (let i = start; i <= end; i = i + 0.01) {
    let value = f(i);

    if (Math.abs(value) < 1e-6) {
        console.log(`Zero: ${Math.round(i)}`);
    }

    if (value > max) {
        max = value;
    } else if (value < min) {
        min = value;
    }
}

console.log(`Min: ${min}, Max: ${max}`);
