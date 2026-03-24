class CreditoInsufficiente extends Error {}

type TipoMovimento = "R" | "S";

class Parcometro {
    static #operazioni: Set<[Parcometro, Movimento]> = new Set();

    targa: string;
    #credito: number;
    #listaMovimenti: Movimento[] = [];

    constructor(targa: string, credito: number = 0) {
        if (targa === "")
            throw new TypeError("targa deve essere stringa non vuota.");
        if (credito < 0)
            throw new TypeError("credito deve essere non negativo.");
        this.targa = targa;
        this.#credito = credito;
    }

    get credito(): number {
        return this.#credito;
    }

    ricarica(euro: number, motivo: string): void {
        if (euro <= 0 || !Number.isFinite(euro))
            throw new TypeError("euro deve essere strettamente positivo.");
        this.#credito += euro;
        const movimento = new Movimento("R", euro, motivo, new Date());
        this.#listaMovimenti.unshift(movimento);
        Parcometro.#operazioni.add([this, movimento]);
    }

    paga(euro: number, motivo: string): void {
        if (euro <= 0 || !Number.isFinite(euro))
            throw new TypeError("euro deve essere strettamente positivo.");
        if (euro > this.#credito) throw new CreditoInsufficiente();
        this.#credito -= euro;
        const movimento = new Movimento("S", euro, motivo, new Date());
        this.#listaMovimenti.unshift(movimento);
        Parcometro.#operazioni.add([this, movimento]);
    }

    storico(k: number = 5): Movimento[] {
        return JSON.parse(JSON.stringify(this.#listaMovimenti.slice(0, k)));
    }

    static registro(): Set<[Parcometro, Movimento]> {
        return new Set(Parcometro.#operazioni);
    }
}

class Movimento {
    tipo: TipoMovimento;
    euro: number;
    motivo: string;
    data: Date;

    constructor(tipo: TipoMovimento, euro: number, motivo: string, data: Date) {
        this.tipo = tipo;
        this.euro = euro;
        this.motivo = motivo;
        this.data = data;
    }
}
