let head = {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};

function listPrint_rec(head) {
    if (head === null) return;
    console.log(head.val);
    listPrint_rec(head.next);
}

function listPrint_iter(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

function listFind_rec(head, value) {
    if (head === null) return null;
    if (head.val === value) return head;
    return listFind_rec(head.next, value);
}

function listFind_iter(head, value) {
    if (head === null) return null;
    let current = head;
    while (current != null) {
        if (current.val === value) return current;
        current = current.next;
    }
}

function listInsert(x, value) {
    if (x === null) return;
    const temp = x.next;
    x.next = { val: value, next: temp };
}

function listShift(head) {
    if (head === null) return [null, undefined];
    return [head.next, head.val];
}

function listUnshift(head) {
    if (head === null) return { val: undefined, next: null };
    return { val: undefined, next: head };
}

function listPush_rec(head, value) {
    if (head === null) return { val: value, next: null };
    if (head.next) listPush_rec(head.next, value);
    else listInsert(head, value);
    return head;
}

function listPush_iter(head, value) {
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = { val: value, next: null };
    return head;
}

function listPop(head) {
    let current = head;
    while (current.next.next !== null) {
        current = current.next;
    }
    const r = current.next.val;
    current.next = null;
    return [head, r];
}

function listLength(head) {
    function len(head, value) {
        if (head === null) return value;
        return len(head.next, value + 1);
    }
    return len(head, 0);
}

function listCopy(head) {
    if (head === null) return null;
    return {
        val: head.val,
        next: listCopy(head.next),
    };
}

function listConcat(a, b) {
    if (a.next === null) {
        a.next = b;
        return;
    }
    listConcat(a.next, b);
}

function listToArray(head) {
    if (head === null) return null;

    const next = listToArray(head.next);

    if (next != null) {
        return [head.val].concat(next);
    } else {
        return [head.val];
    }
}

console.log("-- stampa");
listPrint_iter(head);

console.log("-- aggiungi 10 dopo 3");
let item = listFind_iter(head, 3);
listInsert(item, 10);
listPrint_rec(head);

console.log("-- rimovi testa");
console.log("- lista dopo shift");
[head, r] = listShift(head); // let r?
listPrint_iter(head);
console.log("- valore rimosso");
console.log(r);

console.log("-- aggiungi in testa");
head = listUnshift(head);
listPrint_iter(head);

console.log("-- aggiungi in coda");
listPush_rec(head, 100);
listPrint_iter(head);

console.log("-- rimovi in coda");
[head, r] = listPop(head);
console.log("- lista dopo pop");
listPrint_iter(head);
console.log("- valore rimosso");
console.log(r);
console.log("-- lunghezza lista");
console.log(listLength(head));

console.log("-- nuova lista");
let list2 = listCopy(head);
[list2, r] = listShift(list2);
console.log("- nuova lista modificata");
listPrint_iter(list2);
console.log("- lista vecchia");
listPrint_iter(head);

console.log("-- concat liste");
a = { val: 1, next: { val: 2, next: null } };
b = { val: 3, next: { val: 4, next: null } };
console.log("- a");
listPrint_iter(a);
console.log("- b");
listPrint_iter(b);
listConcat(a, b);
console.log("- a (concatenate)");
listPrint_iter(a);

console.log("-- list to array");
console.log(listToArray(a));
