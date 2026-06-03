class Scritto {
    titolo;
    autore;
    numPagine;

    constructor(t, a, p) {
        this.titolo = t;
        this.autore = a;
        this.numPagine = p;
    }
}

class Libro extends Scritto {
    editore;

    constructor(t, a, p, e) {
        super(t, a, p);
        this.editore = e;
    }
}

class Romanzo extends Libro {
    protagonista;
    constructor(t, a, p, e, prot) {
        super(t, a, p, e);
        this.protagonista = prot;
    }
}

class Poema extends Scritto {
    get poeta() {
        return this.autore;
    }

    set poeta(val) {
        this.autore = val;
    }
}

function mattone(scritti) {
    let libro = undefined;
    let max = -Infinity;
    for (const s of scritti) {
        if (s instanceof Libro) {
            if (s.numPagine > max) {
                libro = s.titolo;
                max = s.numPagine;
            }
        }
    }
    return libro;
}
