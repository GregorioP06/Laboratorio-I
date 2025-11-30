function fip(a, p) {
    const b = a.filter(p);
    a.length = 0; // rimuove tutti gli elementi dell'array in-place
    a.push(...b); // aggiunge tutti gli elementi filtrati in-place
}

const a = [3, 5, 10, 1, 4];
fip(a, (x) => x % 2);
console.log(a);
