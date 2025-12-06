function filtraLista(head) {
    if (head) {
        // filtra tutta la parte successiva
        const { lista, rimossi } = filtraLista(head.next);
        head.next = lista;
        if (head.val % 1 === 0) {
            if (head.val % 2 === 1) {
                // se il valore corrente è intero e dispari
                // rimuovilo e incrementa il numero dei rimossi
                return { lista: head.next, rimossi: 1 + rimossi };
            }
            // se il valore corrente è intero ma pari non fare nulla
            return { lista: head, rimossi: rimossi };
        }
        // se il valore corrente non è intero non fare nulla
        return { lista: head, rimossi: rimossi };
    }
    // caso base lista vuota
    return { lista: null, rimossi: 0 };
}
