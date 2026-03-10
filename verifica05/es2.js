class Elemento {
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

function* calcola(testa, f) {
    let sum = 0;
    let cur = testa;
    while (cur !== null) {
        sum += f(cur.val);
        yield sum;
        cur = cur.next;
    }
}
