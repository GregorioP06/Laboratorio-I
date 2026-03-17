enum Seme {
    CUORI,
    QUADRI,
    FIORI,
    PICCHE,
}

enum Valore {
    TWO = 2,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    ACE,
}

class Mano {
    private cards: [Seme, Valore][] = [];

    constructor(...cards: [Seme, Valore][]) {
        if (cards.length !== 5) throw new Error();
        // ordina le carte per valore
        this.cards = cards.sort((a, b) => a[1] - b[1]);
    }

    poker(): boolean {
        for (const v in Valore) {
            if (this.cards.filter((c) => Valore[c[1]] === v).length === 4)
                return true;
        }
        return false;
    }

    scala(): boolean {
        // prendi solo i valori delle carte
        const cards: number[] = this.cards.map((c) => c[1]);

        // se tutte le carte sono +1 rispetto alla precedente allora è una scala
        let isScala = true;
        for (let i = 1; i < cards.length; i++) {
            if (cards[i] !== cards[i - 1] + 1) isScala = false;
        }
        if (isScala) return true;

        // se c'è l'asso (ultima carta)
        // ripeti il controllo cambiando il valore dell'asso (14) a 1
        if (cards.at(-1) === Valore.ACE) {
            isScala = true;
            cards.pop();
            cards.unshift(1);
            for (let i = 1; i < cards.length; i++) {
                if (cards[i] !== cards[i - 1] + 1) isScala = false;
            }
        }

        return isScala;
    }

    colore(): boolean {
        for (const s in Seme) {
            if (this.cards.filter((c) => Seme[c[0]] === s).length === 5)
                return true;
        }
        return false;
    }

    scalaReale(): boolean {
        return this.cards[0][1] === Valore.TEN && this.scala() && this.colore();
    }
}

let m1 = new Mano(
    [Seme.CUORI, Valore.ACE],
    [Seme.FIORI, Valore.ACE],
    [Seme.QUADRI, Valore.ACE],
    [Seme.PICCHE, Valore.ACE],
    [Seme.CUORI, Valore.KING],
);

console.log(m1.poker());

let m2 = new Mano(
    [Seme.CUORI, Valore.NINE],
    [Seme.CUORI, Valore.TEN],
    [Seme.FIORI, Valore.JACK],
    [Seme.QUADRI, Valore.QUEEN],
    [Seme.PICCHE, Valore.KING],
);

console.log(m2.scala());

let m3 = new Mano(
    [Seme.CUORI, Valore.TEN],
    [Seme.CUORI, Valore.TWO],
    [Seme.CUORI, Valore.FIVE],
    [Seme.CUORI, Valore.NINE],
    [Seme.CUORI, Valore.ACE],
);

console.log(m3.colore());

let m4 = new Mano(
    [Seme.CUORI, Valore.TEN],
    [Seme.CUORI, Valore.JACK],
    [Seme.CUORI, Valore.QUEEN],
    [Seme.CUORI, Valore.KING],
    [Seme.CUORI, Valore.ACE],
);

console.log(m4.scalaReale());
