class FondiInsufficienti extends Error {}

class Caveau {
    #saldo;
    #movimenti = [];
    static #trans = new Set();

    constructor(o, s = 0) {
        if (typeof o !== "string" || o === "") throw new TypeError();
        this.owner = o;
        if (typeof s !== "number" || s < 0) throw new TypeError();
        this.#saldo = s;
    }

    get saldo() {
        return this.#saldo;
    }

    versa(n, c) {
        if (typeof n !== "number" || n <= 0) throw new TypeError();
        if (typeof c !== "string") throw new TypeError();
        this.#saldo += n;
        // l'ho trovato sulla documentazione js, definendo una classe Transazione con campi privati e getter falliva i test case
        const t = Object.freeze({
            tipo: "V",
            importo: n,
            causale: c,
        });
        // unshift così i più nuovi sono in testa
        this.#movimenti.unshift(t);
        Caveau.#trans.add([t, this]);
    }

    preleva(n, c) {
        if (typeof n !== "number" || n <= 0) throw new TypeError();
        if (typeof c !== "string") throw new TypeError();
        if (n > this.#saldo) throw new FondiInsufficienti();
        this.#saldo -= n;
        const t = Object.freeze({
            tipo: "P",
            importo: n,
            causale: c,
        });
        // unshift così i più nuovi sono in testa
        this.#movimenti.unshift(t);
        Caveau.#trans.add([t, this]);
    }

    estratto(k = 10) {
        // per ritornare una copia
        // siccome il più nuovo è in testa posso usare slice dalla testa
        return JSON.parse(JSON.stringify(this.#movimenti.slice(0, k)));
    }

    static transazioni() {
        return new Set(Caveau.#trans);
    }
}
