type Messaggio = string | number | null | undefined;

function formatta(m: Messaggio): string {
    if (typeof m === "string") return m;
    else if (typeof m === "number") return `CODICE ${m}`;
    return "NESSUN MESSAGGIO";
}

function formattaTutti(ms: Messaggio[]): string[] {
    return ms.map((m) => formatta(m));
}

function leggiValore(x: unknown): Messaggio {
    if (
        typeof x === "string" ||
        typeof x === "number" ||
        typeof x === null ||
        typeof x === undefined
    )
        return x as Messaggio;

    throw new TypeError();
}
