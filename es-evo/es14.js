function meet(f, g, intervallo) {
    let c = intervallo[0];
    let diff = f(c) - g(c);
    const step = 0.0001;
    while (Math.abs(diff) >= 0.001) {
        c += step;
        diff = f(c) - g(c);
    }
    return c;
}
