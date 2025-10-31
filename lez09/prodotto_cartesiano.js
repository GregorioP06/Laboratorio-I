function prodotto_cartesiano(A, B) {
    const r = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            r.push([A[i], B[j]]);
        }
    }
    return r;
}

console.log(prodotto_cartesiano(["x", "y"], [1, 2]));
console.log(prodotto_cartesiano(["x", "y", "z"], [1, 2]));
