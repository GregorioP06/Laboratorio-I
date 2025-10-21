function applicaNaturali(f, a) {
    let risultati = a.map((x) => (x >= 0 && x % 1 == 0 ? f(x) : undefined));

    let filtered = risultati.filter((x) => x !== undefined);
    let min = Math.min(...filtered);
    let max = Math.max(...filtered);

    return {
        risultati,
        min,
        max,
    };
}
