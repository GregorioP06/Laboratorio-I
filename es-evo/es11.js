function counted(f) {
    let g = function (...args) {
        g.n++;
        return f(...args);
    };
    g.n = 0;
    g.calls = function () {
        return this.n;
    };
    g.reset = function () {
        this.n = 0;
    };

    return g;
}
