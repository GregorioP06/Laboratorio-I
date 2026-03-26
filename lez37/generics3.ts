interface Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}

let n1: Node<number> = { value: 1, next: null, prev: null };
// let n2: Node<number> = { value: "abc", next: null, prev: null };
