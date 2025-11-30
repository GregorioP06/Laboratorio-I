function reverse_iter(a) {
    const reversed = [];
    a.forEach((element) => {
        reversed.unshift(element);
    });
    return reversed;
}

function reverse_rec(a) {
    if (a.length === 0) return [];
    if (a.length === 1) return a;
    let [primo, ...resto] = a;
    reversed = [primo].concat(reverse_rec(resto));
    return reversed;
}

const a = [1, 2, 3, 4];

console.log(reverse_iter(a));
console.log(reverse_rec(a));
