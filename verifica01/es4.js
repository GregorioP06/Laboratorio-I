function prodottoMigliore(a, p) {
    let nome_migliore = undefined;
    let media_migliore = -Infinity;

    for (const prodotto of a) {
        // controlla se il prodotto ha la caratteristica p
        if (p in prodotto) {
            // calcolo media dei voti della caratteristica
            let media = 0;
            for (const v of prodotto[p]) {
                media += v;
            }
            media = media / prodotto[p].length;

            // se la media è uguale a quella migliore salva il prodotto più piccolo alfabeticamente
            if (media === media_migliore) {
                if (prodotto["nome"] < nome_migliore) {
                    nome_migliore = prodotto.nome;
                }
            // se la media è più alta salva questo prodotto
            } else if (media > media_migliore) {
                nome_migliore = prodotto.nome;
                media_migliore = media;
            }
        }
    }

    return nome_migliore;
}
