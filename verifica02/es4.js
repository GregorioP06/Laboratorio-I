function contaFLista(head, f) {
    let counter = 0;
    let current = head;

    // scorri tutti i nodi
    while (current != null) {
        // se il valori di un nodo non è intero interrompi
        if (current.val % 1 !== 0) return counter;

        // altrimenti controlla f e in caso incrementa di 1
        if (f(current)) counter += 1;

        // passa al prossimo nodo
        current = current.next;
    }

    return counter;
}
