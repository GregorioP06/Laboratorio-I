// es4.js: output corretto, ma contaFLista doveva essere ricorsiva

function contaFLista(head, f) {
    if (!head || !Number.isInteger(head.val)) return 0

    if (f(head)) return 1 + contaFLista(head.next, f);
    return contaFLista(head.next, f)
}
