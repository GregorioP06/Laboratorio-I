function listIsSorted(head) {
    if (!head || !head.next) return false;
    return head.val <= head.next.val || listIsSorted(head.next);
}

const list = {
    val: 1,
    next: { val: 2, next: { val: 4, next: { val: 3, next: null } } },
};

console.log(listIsSorted(list));

// 1, 2, 3 -> true
// 3, 2, 1, 0 -> false
// 1, 2, 4, 3 -> true
