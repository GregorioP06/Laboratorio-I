class PrioritaNonValida extends Error {}
class ModificaTicketChiuso extends Error {
    constructor(codice) {
        super();
        this.codice = codice;
    }
}
class SLASuperato extends ModificaTicketChiuso {}

class Ticket {
    #codice;
    #priorita;
    #chiuso = false;
    #log = [];

    constructor(codice, priorita) {
        if (typeof codice !== "string" || codice === "") throw new TypeError();

        if (Number(priorita) !== priorita || priorita < 1 || priorita > 5)
            throw new TypeError();

        this.#codice = codice;
        this.priorita = priorita;
    }

    get codice() {
        return this.#codice;
    }

    get priorita() {
        return this.#priorita;
    }

    get chiuso() {
        return this.#chiuso;
    }

    set priorita(val) {
        if (this.#chiuso) throw new ModificaTicketChiuso(this.codice);
        if (val % 1 === 0 && val >= 1 && val <= 5) this.#priorita = val;
        else throw new PrioritaNonValida();
    }

    aggiungiNota(testo) {
        if (this.#chiuso) throw new ModificaTicketChiuso(this.codice);
        this.#log.push(testo);
    }

    chiudi() {
        this.aggiungiNota("CHIUSURA");
        this.#chiuso = true;
    }
}

class TicketConSLA extends Ticket {
    #tempoMassimo;
    #tempoTrascorso = 0;

    constructor(tempoMassimo) {
        if (tempoMassimo <= 0) throw new Error();
        this.tempoMassimo = tempoMassimo;
    }

    get tempoTrascorso() {
        return this.#tempoTrascorso;
    }

    set tempoTrascorso(val) {
        if (val > this.#tempoMassimo) {
            this.chiudi();
            throw new SLASuperato(this.codice);
        }
    }

    incrementaTempo(tickets, delta) {
        const errors = [];

        for (const t of tickets) {
            if (t instanceof TicketConSLA) {
                try {
                    t.tempoTrascorso += delta;
                } catch {
                    errors.push(t);
                }
            }
        }

        return errors;
    }
}
