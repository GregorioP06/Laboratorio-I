function ksumlimit(p, k, ...n) {
    let sum = 0;
    const filtered = n.filter((x) => x > p);
    for (const i in filtered) {
        sum += filtered[i];
        if (sum > k) return filtered.slice(0, i);
    }
}

const r = ksumlimit(3, 20, 5, 10, 4, 8, 1, 7);
console.log(r);
