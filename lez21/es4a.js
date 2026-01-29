function nuovaPila() {
    const stack = [];

    const p = {
        impila: (x) => stack.push(x),
        depila: () => stack.pop(),
        stack,
    };

    return p;
}

const p = nuovaPila();
p.impila(1);
p.impila(3);
console.log(p.depila());

const q = nuovaPila();
q.impila(42);
console.log(q.stack);
