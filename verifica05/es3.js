class ModificaNonConsentita extends Error {
    constructor(i, s) {
        super();
        this.id = i;
        this.stato = s;
    }
}
class StatoNonValido extends Error {}
class CatenaDelFreddoRotta extends Error {}

class Pacco {
    #identificatore;
    #peso;
    #stato;
    #eventi = [];

    constructor(id, peso) {
        this.#identificatore = id;
        this.#peso = peso;
        this.#stato = "CREATO";
    }

    get identificatore() {
        return this.#identificatore;
    }

    get stato() {
        return this.#stato;
    }

    get eventi() {
        return this.#eventi;
    }

    get peso() {
        return this.#peso;
    }

    set peso(val) {
        if (this.stato !== "CREATO")
            throw new ModificaNonConsentita(this.identificatore, this.stato);
        this.#peso = val;
    }

    avanza(stato) {
        if (
            stato === "CREATO" ||
            stato === "IN_TRANSITO" ||
            stato === "CONSEGNATO" ||
            stato === "BLOCCATO"
        ) {
            this.#stato = stato;
            this.#eventi.push([new Date(), stato]);
        } else {
            throw new StatoNonValido();
        }
    }
}

class PaccoRefrigerato extends Pacco {
    #temperatura_minima;
    #temperatura_massima;
    #temperatura_attuale;

    constructor(id, peso, min, max, cur) {
        if (min >= max) throw new RangeError();
        super(id, peso);
        this.#temperatura_minima = min;
        this.#temperatura_massima = max;
        this.temperatura_attuale = cur;
    }

    get temperatura_minima() {
        return this.#temperatura_minima;
    }

    get temperatura_massima() {
        return this.#temperatura_massima;
    }

    get temperatura_attuale() {
        return this.#temperatura_attuale;
    }

    set temperatura_attuale(val) {
        if (val < this.temperatura_minima || val > this.temperatura_massima) {
            this.avanza("BLOCCATO");
            throw new CatenaDelFreddoRotta();
        }
        this.#temperatura_attuale = val;
    }
}

class PaccoFreezer extends PaccoRefrigerato {
    constructor(id, peso, min, cur) {
        super(id, peso, min, 0, cur);
    }
}

function aggiorna(pacchi_refrigerati, temperatura) {
    const errors = [];
    for (const p of pacchi_refrigerati) {
        try {
            p.temperatura_attuale = temperatura;
        } catch (e) {
            if (e instanceof CatenaDelFreddoRotta) errors.push(p);
            else throw e;
        }
    }
    return errors;
}

function* bloccati(pacchi) {
    for (const p of pacchi) {
        if (p instanceof Pacco && !(p instanceof PaccoRefrigerato)) {
            if (p.stato === "BLOCCATO") yield p;
        }
    }
}
