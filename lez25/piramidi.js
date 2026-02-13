class Figura {
    perimetro() {}
    area() {}
}

class Triangolo extends Figura {
    constructor(l1, l2, l3) {
        super();
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    perimetro() {
        return this.l1 + this.l2 + this.l3;
    }

    area() {
        const semi = this.perimetro() / 2;
        return Math.sqrt(
            semi * (semi - this.l1) * (semi - this.l2) * (semi - this.l3),
        );
    }
}

class Rettangolo extends Figura {
    constructor(base, altezza) {
        super();
        this.base = base;
        this.altezza = altezza;
    }

    perimetro() {
        return (this.base + this.altezza) * 2;
    }

    area() {
        return this.base * this.altezza;
    }
}

// class Quadrato extends Figura {
//     constructor(l) {
//         super();
//         this.l = l;
//     }

//     perimetro() {
//         return this.l * 4;
//     }

//     area() {
//         return this.l ** 2;
//     }
// }

class Quadrato extends Rettangolo {
    constructor(lato) {
        super(lato, lato);
    }
}

class Cerchio extends Figura {
    constructor(raggio) {
        this.raggio = raggio;
    }

    perimetro() {
        return Math.PI * this.raggio * 2;
    }

    area() {
        return Math.PI * this.raggio ** 2;
    }
}

class Piramide {
    constructor(figura, altezza) {
        this.figuraBase = figura;
        this.h = altezza;
    }

    volume() {
        return (this.figuraBase.area() * this.h) / 3;
    }

    static ordina(...piramidi) {
        return piramidi.sort((a, b) => a.volume() - b.volume());
    }
}
