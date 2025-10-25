function filtraCorso(a, f) {
    const result = [];

    for (const studente of a) {
        if (
            100000 <= studente[1] && // controlla che la matricola sia un numero a 6 cifre
            studente[1] <= 999999 &&
            Number.isInteger(studente[1]) && // e che sia un intero
            f(studente[1]) // e che f(matricola) sia true
        ) {
            result.push(studente);
        }
    }

    result.sort((s1, s2) => {
        // se stesso cognome ordina per matricola decrescente
        if (s1[0] === s2[0]) {
            return s2[1] - s1[1];
        }
        // altrimenti per ordine alfabetico
        return s1[0].localeCompare(s2[0]);
    });

    return result;
}
