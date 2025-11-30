function funprop(f, p) {
    return (a, b) => {
        const filtered = [];
        for (let k = a; k <= b; k++) {
            if (!p || p(f(k))) filtered.push(k);
        }
        return filtered;
    };
}

// più corta
function funprop2(f, p) {
    return (a, b) => {
        // crea un array di b-a+1 interi compresi tra a e b
        // ovvero, array degli interi compresi tra a e b (inclusi)
        const numbers = [...Array(b - a + 1).keys()].map((i) => i + a);
        return !p ? numbers : numbers.filter((k) => p(f(k)));
    };
}

console.log(
    funprop(
        (n) => 2 * n,
        (n) => n % 2 == 0
    )(4, 6)
);

console.log(
    funprop(
        (n) => 2 * n,
        (n) => n > 10
    )(4, 8)
);
console.log(
    funprop(
        (n) => n,
        (n) => n % 2 == 1
    )(10, 20)
);
console.log(funprop((n) => n * n)(4, 6));
