class CreditoInsufficiente extends Error {}

class Parcometro {
    static #operazioni = new Set();
    
    #credito;
    #listaMovimenti = [];

    constructor(targa, credito = 0) {
        if (!targa) throw new TypeError("targa deve essere stringa non vuota.");
        if (credito < 0)
            throw new TypeError("credito deve essere non negativo.");
        this.targa = targa;
        this.#credito = credito;
    }

    get credito() {
        return this.#credito;
    }

    ricarica(euro, motivo) {
        if (euro <= 0 || !Number.isFinite(euro))
            throw new TypeError("euro deve essere strettamente positivo.");
        if (typeof motivo !== "string")
            throw new TypeError("motivo deve essere stringa.");
        this.#credito += euro;
        const movimento = new Movimento("R", euro, motivo, new Date());
        this.#listaMovimenti.unshift(movimento);
        Parcometro.#operazioni.add([this, movimento]);
    }

    paga(euro, motivo) {
        if (euro <= 0 || !Number.isFinite(euro))
            throw new TypeError("euro deve essere strettamente positivo.");
        if (typeof motivo !== "string")
            throw new TypeError("motivo deve essere stringa.");
        if (euro > this.#credito) throw new CreditoInsufficiente();
        this.#credito -= euro;
        const movimento = new Movimento("S", euro, motivo, new Date());
        this.#listaMovimenti.unshift(movimento);
        Parcometro.#operazioni.add([this, movimento]);
    }

    storico(k = 5) {
        return JSON.parse(JSON.stringify(this.#listaMovimenti.slice(0, k)));
    }

    static registro() {
        return new Set(Parcometro.#operazioni);
    }
}

class Movimento {
    constructor(tipo, euro, motivo, data) {
        this.tipo = tipo;
        this.euro = euro;
        this.motivo = motivo;
        this.data = data;
    }
}
