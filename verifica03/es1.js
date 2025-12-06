function sommaCoppie(A, k) {
    let coppie = 0;
    for (let i = 0; i < A.length - 1; i++) {
        // controlla che l'elemento sia un numero
        if (typeof A[i] === "number") {
            // inizia a controllare con l'elemento dopo il corrente
            // (dato che le coppie sono non ordinate)
            for (let j = i + 1; j < A.length; j++) {
                // controlla che l'elemento sia un numero
                if (typeof A[j] === "number") {
                    // se rispettano la proprietà, incrementa il contatore
                    if ((A[i] + A[j]) % k === 0) coppie += 1;
                }
            }
        }
    }
    return coppie;
}
