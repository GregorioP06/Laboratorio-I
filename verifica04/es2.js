class INode {
    constructor([a, b]) {
        this.a = a;
        this.b = b;
        this.left = null;
        this.right = null;
    }

    get maxd() {
        if (!this.left && !this.right) return 1;
        return (
            1 +
            Math.max(
                this.left ? this.left.maxd : 0,
                this.right ? this.right.maxd : 0,
            )
        );
    }

    get mind() {
        if (!this.left && !this.right) return 1;
        return (
            1 +
            Math.min(
                this.left ? this.left.mind : Infinity,
                this.right ? this.right.mind : Infinity,
            )
        );
    }

    add(n) {
        if (!(n instanceof INode)) {
            n = new INode(n);
        }

        // caso n.a minore
        if (n.a < this.a) {
            // controlla se è vuoto a sx altrimenti ricorsione
            if (!this.left) this.left = n;
            else this.left.add(n);

            // caso n.a maggiore
        } else if (n.a > this.a) {
            // controlla se è vuoto a dx altrimenti ricorsione
            if (!this.right) this.right = n;
            else this.right.add(n);

            // caso n.a uguale
        } else {
            // caso n.b minore
            if (n.b < this.b) {
                // controlla se è vuoto a sx altrimenti ricorsione
                if (!this.left) this.left = n;
                else this.left.add(n);

                // caso n.b maggiore (non può essere uguale)
            } else {
                // controlla se è vuoto a dx altrimenti ricorsione
                if (!this.right) this.right = n;
                else this.right.add(n);
            }
        }
    }

    findValue(x) {
        // controlla se x è in questo intervallo
        if (this.a <= x && x <= this.b) {
            return this;
        }

        // se c'è il nodo sinistro controlla in esso
        const l = this.left ? this.left.findValue(x) : null;
        if (l) return l;

        // se c'è il nodo destro controlla in esso
        const r = this.right ? this.right.findValue(x) : null;
        return r;
    }
}

class YetAnotherAlbero {
    root = null;
    size = 0;

    addInterval([a, b]) {
        // se non c'è la radice questo nodo diventa radice
        if (!this.root) this.root = new INode([a, b]);
        // altrimenti aggiungilo ricorsivamente
        else this.root.add([a, b]);
        this.size++;
    }
}