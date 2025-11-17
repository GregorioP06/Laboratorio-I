// 0 indexed
function listNth(head, n) {
    if (head === null) return null;
    if (n === 0) return head;
    return listNth(head.next, n - 1);
}

let list = { val: 5, next: { val: 3, next: { val: 6, next: null } } };

console.log(listNth(list, 1));
