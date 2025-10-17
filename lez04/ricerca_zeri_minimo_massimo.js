function f(x) {
    return x ** 3 - 6 * x ** 2 + 11 * x - 6;
}

let start = 1;
let end = 4;
let min = +Infinity;
let max = -Infinity;

for (let i = start; i <= end; i = i + 0.01) {
    let y = f(i);

    if (Math.abs(y) < 1e-6) {
        console.log(`Zero: ${i.toPrecision(3)}`);
    }

    if (y > max) {
        max = y;
    } else if (y < min) {
        min = y;
    }
}

console.log(`Min: ${min.toPrecision(3)}, Max: ${max.toPrecision(3)}`);
