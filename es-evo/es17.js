function* bin(n) {
    if (n <= 0) throw new UnsuitableNumberError();
    const binary = convert(n, 2);
    for (const bit of binary) {
        yield bit;
    }
}

function convert(n, b) {
    const res = [];
    while (n > 0) {
        res.push(n % b);
        n = (n - (n % b)) / b;
    }
    return res;
}

class UnsuitableNumberError extends Error {}

for (const b of bin(4)) {
    console.log(b);
}
