class InteroFinito {
    #value;

    constructor(N, v = 0) {
        this.mod = N;
        this.#value = v % N;
    }

    get val() {
        return this.#value;
    }

    set val(v) {
        this.#value = v % this.mod;
    }

    somma(b) {
        this.val = this.val + b;
    }

    prodotto(b) {
        this.val = this.val * b;
    }
}

// let a = new InteroFinito(10, 12);
// let b = new InteroFinito(17, 2);
// a.prodotto(b.val);
// console.log(a.val);
