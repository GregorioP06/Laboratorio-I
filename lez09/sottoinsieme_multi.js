function sottoinsieme_multi(A, B) {
    for (const key in A) {
        if (!(A[key] in B) && A[key] > B[key]) {
            return false;
        }
    }
    return true;
}

const A = { a: 2, b: 1 };
// const A = { a: 3, c: 10 };
// const A = { a: 3, c: 10, e: 1 };
const B = { a: 5, b: 3, c: 2 };

const r = sottoinsieme_multi(A, B);
console.log(r);
