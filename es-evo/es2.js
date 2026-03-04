// esercizi evo
// tags: classi, generatori, eccezioni

class Stadio {
    constructor(n, m) {
        this.NpOspitiTot = n;
        this.pOspitiOcc = new Array(n).fill(false);
        this.NpCasaTot = m;
        this.pCasaOcc = new Array(m).fill(false);
    }

    prenota_posto(s, i) {
        if (s === "casa") {
            if (i < 0 || i >= this.NpCasaTot) return false;

            if (this.pCasaOcc[i]) return false;

            this.pCasaOcc[i] = true;
            return true;
        }
        if (s === "ospiti") {
            if (i < 0 || i >= this.NpOspitiTot) return false;

            if (this.pOspitiOcc[i]) return false;

            this.pOspitiOcc[i] = true;
            return true;
        }

        throw new SectorError("Settore non esistente");
    }

    posti_liberi(s) {
        if (s === "casa") {
            return this.pCasaOcc.filter((x) => !x).length;
        }
        if (s === "ospiti") {
            return this.pOspitiOcc.filter((x) => !x).length;
        }

        throw new SectorError("Settore non esistente");
    }

    is_full() {
        return this.posti_liberi("casa") + this.posti_liberi("ospiti") === 0;
    }

    svuota_stadio() {
        this.pOspitiOcc.fill(false);
        this.pCasaOcc.fill(false);
    }
}

class SectorError extends Error {}

//

class VeicoloError extends Error {}

class Veicolo {
    #targa;
    #n_ruote;
    #colore;
    constructor(t, n, c) {
        this.targa = t;
        this.n_ruote = n;
        this.colore = c;
    }

    get targa() {
        return this.#targa;
    }
    set targa(val) {
        const pattern = /^[a-zA-Z\d]{7}$/;
        if (typeof val === "string" && pattern.test(val)) {
            this.#targa = val;
        } else throw new VeicoloError();
    }

    get n_ruote() {
        return this.#n_ruote;
    }
    set n_ruote(val) {
        if (Number.isInteger(val) && val > 0) this.#n_ruote = val;
        else throw new VeicoloError();
    }

    get colore() {
        return this.#colore;
    }
    set colore(val) {
        if (typeof val === "string" && val) this.#colore = val;
        else throw new VeicoloError();
    }

    toString() {
        return `${this.targa}${this.n_ruote}${this.colore}`;
    }
}

class Automobile extends Veicolo {
    #n_porte;

    constructor(t, c, p) {
        super(t, 4, c);
        this.n_porte = p;
    }

    get n_porte() {
        return this.#n_porte;
    }
    set n_porte(val) {
        if (Number.isInteger(val) && val > 0) this.#n_porte = val;
        else throw new VeicoloError();
    }

    toString() {
        return `${super.toString()}${this.n_porte}`;
    }
}

//

class Talk {
    constructor(t, s, d) {
        this.title = t;
        this.speaker = s;
        this.duration = d;
    }
}
class Lecture extends Talk {
    constructor(t, s, d, c) {
        super(t, s, d);
        this.course = c;
    }

    get teacher() {
        return this.speaker;
    }
    set teacher(val) {
        this.speaker = val;
    }
}
class Seminar extends Talk {
    constructor(t, s, d, e) {
        super(t, s, d);
        this.event = e;
    }
}
class Webinar extends Seminar {
    constructor(t, s, d, e) {
        super(t, s, d, e);
    }
}

function pickSeminar(talks) {
    let longestSeminar = null;

    for (const t of talks) {
        if (t instanceof Seminar) {
            if (!longestSeminar || t.duration > longestSeminar.duration) {
                longestSeminar = t;
            }
        }
    }

    return longestSeminar ? longestSeminar.title : undefined;
}

//

class ContoBancario {
    constructor(s, m) {
        if (s < 0 || m < 0) throw new InvalidMoney();
        this.saldo = s;
        this.massimale = m;
    }

    deposito(val) {
        if (val < 0) throw new InvalidMoney();
        if (val > this.massimale) throw new ExcessiveMoney();

        this.saldo += val;
        return this.saldo;
    }

    prelievo(val) {
        if (val < 0) throw new InvalidMoney();
        if (val > this.saldo) throw new InsufficientMoney();

        this.saldo -= val;
        return this.saldo;
    }
}

function applica(conto, depositi, prelievi) {
    const saldoIniziale = conto.saldo;
    try {
        for (let i = 0; i < depositi.length; i++) {
            conto.deposito(depositi[i]);
            conto.prelievo(prelievi[i]);
        }
    } catch (e) {
        conto.saldo = saldoIniziale;
        if (e instanceof InvalidMoney) throw e;
        return false;
    }
    return true;
}

class InvalidMoney extends Error {}
class ExcessiveMoney extends Error {}
class InsufficientMoney extends Error {}

//

class BNode {
    children = [];

    constructor(valore, etichetta = "") {
        this.val = valore;
        this.label = etichetta;
    }

    add(...nodes) {
        if (this.children.length + nodes.length > 2) throw new BadTreeError();
        this.children.push(...nodes);
    }

    *visit() {
        yield this.val;
        for (const c of this.children) {
            yield* c.visit();
        }
    }
}

class BadTreeError extends Error {}

//

class ErroreVeicolo extends Error {}

class Veicolo {
    constructor(modello, targa) {
        this.modello = modello;
        this.targa = targa;
    }

    toString() {
        return this.modello + this.targa;
    }

    controllaVeicolo() {
        if (typeof this.modello !== "string" || typeof this.targa !== "string")
            throw new ErroreVeicolo();
    }
}

class Automobile extends Veicolo {
    constructor(modello, targa, numero_massimo_passeggeri) {
        super(modello, targa);
        this.numero_massimo_passeggeri = numero_massimo_passeggeri;
    }

    toString() {
        super.toString() + this.numero_massimo_passeggeri;
    }

    controllaVeicolo() {
        super.controllaVeicolo();
        if (this.targa.length !== 7) throw new ErroreVeicolo();
    }
}

class Motociclo extends Veicolo {
    constructor(modello, targa, cilindrata) {
        super(modello, targa);
        this.cilindrata = cilindrata;
    }

    toString() {
        super.toString() + this.cilindrata;
    }

    controllaVeicolo() {
        super.controllaVeicolo();
        if (this.targa.length !== 4) throw new ErroreVeicolo();
    }
}

class Ciclomotore extends Motociclo {
    constructor(modello, targa, cilindrata) {
        super(modello, targa, cilindrata);
    }

    controllaVeicolo() {
        super.controllaVeicolo();
        if (this.cilindrata > 125) throw new ErroreVeicolo();
    }
}

function controllaVeicoli(veicoli) {
    try {
        for (const v of veicoli) {
            v.controllaVeicolo();
        }
    } catch {
        return false;
    }
    return true;
}

//

class KomInvalidError extends Error {}

class Kom {
    is_invalid = false;
    is_perma_invalid = false;

    constructor(f) {
        this.f = f;
    }

    do() {
        if (this.is_perma_invalid) throw new KomInvalidError();
        if (!this.is_invalid) this.f();
    }

    re() {
        return this.f;
    }

    mi() {
        if (this.is_perma_invalid) throw new KomInvalidError();
        this.is_invalid = true;
    }

    fa(n) {
        if (this.is_perma_invalid) throw new KomInvalidError();
        for (let i = 0; i < n; i++) {
            this.do();
        }
    }

    sol(b) {
        if (this.is_perma_invalid) throw new KomInvalidError();
        this.is_invalid = !b;
    }

    la() {
        if (this.is_perma_invalid) throw new KomInvalidError();
        this.is_invalid = false;
    }

    si() {
        this.is_invalid = true;
        this.is_perma_invalid = true;
    }
}

//

class Bounded2DSpace {
    constructor(arr_x, arr_y) {
        this.bounded_x = arr_x.filter((x) => x >= -10);
        this.bounded_y = arr_y.slice(0, arr_x.length).filter((y) => y >= -10);
    }
}

class PyramidSpace extends Bounded2DSpace {
    f = function (x, y) {
        const result = 1 - Math.abs(x + y) - Math.abs(y - x);
        if (Number.isNaN(result)) return undefined;
        return result;
    };

    *generate_pyramid() {
        for (let i = 0; i < this.bounded_x.length; i++) {
            yield [
                this.bounded_x[i],
                this.bounded_y[i],
                this.f(this.bounded_x[i], this.bounded_y[i]),
            ];
        }
    }
}
