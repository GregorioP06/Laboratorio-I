interface Node<T> {
    val: T;
    next: Node<T> | null;
}

function filtra<T>(head: Node<T> | null, p: (x: T) => boolean): Node<T> | null {
    if (!head) {
        return null;
    }
    head.next = filtra(head.next, p);
    if (p(head.val)) {
        return head.next;
    }
    return head;
}
