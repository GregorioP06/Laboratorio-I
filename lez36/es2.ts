interface Traccia {
    titolo: string;
    artista: string;
    durata: number;
    preferita?: boolean;
}

function durataTotale(lista: Traccia[]) {
    return lista.reduce((acc, curr) => acc + curr.durata, 0);
}

function soloPreferite(lista: Traccia[]): Traccia[] {
    return [...lista.filter((t) => t.preferita)];
}

function descrivi(t: Traccia): string {
    const s = `${t.titolo} - ${t.artista}`;
    return t.preferita ? s + " ★" : s;
}

function aggiungiGenere(t: Traccia, genere: string) {
    const newObj: {
        titolo: string;
        artista: string;
        durata: number;
        preferita?: boolean;
        genere: string;
    } = {
        titolo: t.titolo,
        artista: t.artista,
        durata: t.durata,
        preferita: t.preferita,
        genere: genere,
    };

    return newObj;
}
