function nuovaCoda() {
    const queue = [];

    const q = {
        enqueue: (x) => queue.push(x),
        dequeue: () => queue.shift(),
        queue,
    };

    return q;
}

const q = nuovaCoda();
q.enqueue(1);
q.enqueue(3);
console.log(q.dequeue());

const q2 = nuovaCoda();
q2.enqueue(42);
console.log(q2.queue);
