function sommaRepdigit(A, b) {
    // funzione per convertire numero a certa base
    // return: lista di cifre che lo rappresentano in quella base
    function convert_to_base(n, b) {
        let converted = [];
        while (n > 0) {
            converted.push(n % b);
            n = Math.floor(n / b);
        }
        converted.reverse();
        return converted;
    }

    // somma dei repdigit
    let result = 0;

    for (const number of A) {
        // converti il numero
        const converted = convert_to_base(number, b);

        // controlla se è un repdigit
        let is_repdigit = true;
        const c = converted[0];

        for (const cifra of converted) {
            if (cifra !== c) is_repdigit = false;
        }
        // se è un repdigit sommalo
        if (is_repdigit) {
            result += number;
        }
    }

    return result;
}
