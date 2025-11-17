function listMap(head, f) {
    if (!head) return null;

    return {
        val: f(head.val),
        next: listMap(head.next, f),
    };
}

listMap({ val: 1, next: null }, (x) => x ** 2);
