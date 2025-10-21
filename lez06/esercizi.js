// 1)
function replace(arr, target, replacement) {
    // return arr.map((x) => (x === target ? replacement : x));
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result.push(replacement);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let input = [1, 2, 3];
console.log(
    `replace: ${input} --> ${replace(
        input,
        3,
        100
    )} | (Input non modificato: ${input})`
);

// 2)
function contamaggioredi(arr, threshold) {
    let count = 0;
    for (num of arr) {
        if (num > threshold) {
            count++;
        }
    }
    return count;
}

console.log("contamaggioredi --> " + contamaggioredi([1, 10, 100], 5));

// 3)
function prodotto_scalare(x, y) {
    if (x.length !== y.length) {
        return undefined;
    }

    let result = 0;
    for (let i = 0; i < x.length; i++) {
        result += x[i] * y[i];
    }
    return result;
}

console.log("prodotto_scalare --> " + prodotto_scalare([1, 2, 3], [2, 2, 3]));

// 4)
function clip(arr, threshold, replacement) {
    return arr.map((x) =>
        x > threshold
            ? replacement === undefined
                ? threshold
                : replacement
            : x
    );
}

console.log("clip1 --> " + clip([1, 10, 100], 5, 9));
console.log("clip2 --> " + clip([1, 10, 100], 5, undefined));

// 5)
function norma(v) {
    v.norma = Math.sqrt(v.x ** 2 + v.y ** 2);
    return v;
}

console.log("norma --> " + JSON.stringify(norma({ x: 10, y: 5 })));

// 6)
function creaFiltro(threshold) {
    return function (arr) {
        return arr.filter((x) => x <= threshold);
    };
}

f = creaFiltro(5);
console.log("creaFiltro --> " + f([1, 2, 10, 3]));
