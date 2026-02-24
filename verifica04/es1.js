class FinestraLab extends Array {
    #pmaxc = 10;

    get maxc() {
        return this.#pmaxc;
    }

    set maxc(val) {
        this.#pmaxc = val;
        // rimuovi eventuali elementi in eccesso dalla testa
        while (this.length > this.#pmaxc) this.shift();
    }

    push(e) {
        super.push(e);
        // rimuovi eventuali elementi in eccesso dalla testa
        while (this.length > this.#pmaxc) this.shift();
    }

    pop() {}
    splice() {}
}