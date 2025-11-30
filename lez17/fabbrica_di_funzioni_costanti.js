function fabbrica(k) {
    return () => k;
}

const f = fabbrica(1);
console.log(f());

const g = fabbrica(2);
console.log(g());

console.log(fabbrica(true)());
