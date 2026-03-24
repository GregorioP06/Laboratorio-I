class PrenotazioneChiusaError extends Error {}
class PrenotazionePienaError extends Error {}
class PasseggeroDuplicatoError extends Error {}

type CategoriaPassaggero = "adulto" | "minore";
type StatoPrenotazione = "aperta" | "chiusa";

class Passaggero {
    #nome: string;
    #categoria: CategoriaPassaggero;

    constructor(nome: string, categoria: CategoriaPassaggero) {
        if (nome === "") throw new TypeError();
        this.#nome = nome;
        this.#categoria = categoria;
    }

    get nome(): string {
        return this.#nome;
    }

    get categoria(): CategoriaPassaggero {
        return this.#categoria;
    }
}

class Prenotazione {
    codice: string;
    posti: number;
    #elencoPassaggeri: Passaggero[] = [];
    stato: StatoPrenotazione = "aperta";

    constructor(codice: string, posti: number) {
        if (codice === "") throw new TypeError();
        if (!Number.isInteger(posti) || posti < 0) throw new TypeError();
        this.codice = codice;
        this.posti = posti;
    }

    aggiungi(p: Passaggero): void {
        if (this.stato === "chiusa") throw new PrenotazioneChiusaError();
        if (this.#elencoPassaggeri.length === this.posti)
            throw new PrenotazionePienaError();
        if (this.#elencoPassaggeri.includes(p))
            throw new PasseggeroDuplicatoError();

        this.#elencoPassaggeri.push(p);
    }

    chiudi(): void {
        this.stato = "chiusa";
    }

    elenco(): Passaggero[] {
        return this.#elencoPassaggeri;
    }

    conteggioMinori(): number {
        return this.#elencoPassaggeri.reduce(
            (acc, curr) => acc + (curr.categoria === "minore" ? 1 : 0),
            0,
        );
    }

    postiLiberi(): number {
        return this.posti - this.#elencoPassaggeri.length;
    }
}

class PrenotazionePremium extends Prenotazione {
    #extra: string;

    constructor(codice: string, posti: number, servizioExtra: string) {
        super(codice, posti);
        if (servizioExtra === "") throw new TypeError();
        this.#extra = servizioExtra;
    }

    get servizioExtra(): string {
        return this.#extra;
    }

    elencoPremium(): { nome: string; extra: string }[] {
        const result = [];

        for (const p of super.elenco()) {
            result.push({
                nome: p.nome,
                extra: this.servizioExtra,
            });
        }

        return result;
    }
}

function chiudiPrenotazioniPiene(xs: unknown[]) {
    const chiuse: Prenotazione[] = [];

    for (const x of xs) {
        if (x instanceof Prenotazione && x.postiLiberi() === 0) {
            x.chiudi();
            chiuse.push(x);
        }
    }

    return chiuse;
}
