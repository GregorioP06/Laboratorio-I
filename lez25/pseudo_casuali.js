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

class GeneratoreRandom {
    #seed;
    #molt;

    constructor(seed, molt) {
        this.#seed = seed;
        this.#molt = molt;
    }

    *random() {
        let last = this.#seed;
        while (true) {
            yield last.val;
            last.prodotto(this.#molt.val);
        }
    }
}

// let seed = new InteroFinito(42, 3);
// let m = new InteroFinito(100, 17);
// let g = new GeneratoreRandom(seed, m);
// let i = 0;
// for (let v of g.random()) {
//     console.log(v);
//     i++;
//     if (i > 100) {
//         console.log(typeof v);
//         break;
//     }
// }
