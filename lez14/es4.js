function listEquals(l1, l2) {
    if (!l1 && !l2) return true;
    if (!l1 || !l2) return false;

    return l1.val === l2.val && listEquals(l1.next, l2.next);
}
