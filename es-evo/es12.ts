type SLLNode<T> = { val: T; next: SLLNode<T> | null };

function sllLen<T>(n: SLLNode<T> | null) {
    let i = 0;
    while (n) {
        i++;
        n = n.next;
    }
    return i;
}
