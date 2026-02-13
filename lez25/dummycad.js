class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Vettore {
    #magnitudine;

    constructor(angolo, magnitudine) {
        this.angolo = angolo;
        this.magnitudine = magnitudine;
    }

    get magnitudine() {
        return this.#magnitudine;
    }

    set magnitudine(val) {
        this.#magnitudine = Math.abs(val);
        if (this.magnitudine == 0) this.magnitudine = 1;
    }
}

// let v = new Vettore(1, 10);

// v.magnitudine = 15;
// console.log(v.magnitudine);
// v.magnitudine = 0;
// console.log(v.magnitudine);
// v.magnitudine = -3;
// console.log(v.magnitudine);

class Polilinea {
    constructor(...vettori) {
        this.vettori = vettori;
    }

    *vertici(origine) {
        let current = origine;
        yield current;
        for (let v in this.vettori) {
            current.x += Math.cos(v.angolo) * magnitudine;
            current.y += Math.sin(v.angolo) * magnitudine;
            yield current;
        }
    }

    chiusa() {
        for (let v in this.vertici(new Punto(0, 0))) {
            let end;
            for (v in this.vertici()) {
                end = v;
            }
            return end.x == 0 && end.y == 0;
        }
    }

    get lunghezza() {
        let len = 0;
        let previous = new Punto(0, 0);
        for (let p in this.vertici()) {
            len += Math.sqrt(
                (previous.x - p.x) ** 2 + (previous.y - p - y) ** 2,
            );
        }
        return len;
    }
}
