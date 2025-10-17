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
    `${input} --> ${replace(input, 3, 100)} | (Input non modificato: ${input})`
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

input = [1, 10, 100];
console.log(contamaggioredi(input, 5));

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

console.log(prodotto_scalare([1, 2, 3], [2, 2, 3]));

// 6)
function creaFiltro(threshold) {
    return function (arr) {
        return arr.filter((x) => x <= threshold);
    };
}

f = creaFiltro(5);
console.log(f([1, 2, 10, 3]));
