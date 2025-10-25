function contaParole(a) {
    let result = {};
    for (const parola of a) {
        if (parola in result) { // se la parola è già in result
            result[parola] += 1; // incrementa di 1 il numero di occorrenze
        } else { // altrimenti aggiungi la parola a 1
            result[parola] = 1;
        }
    }
    return result;
}
