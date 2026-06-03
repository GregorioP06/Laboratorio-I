const bases = {
    A: undefined,
    C: undefined,
    T: undefined,
    G: undefined,
};

function* unfold(dna) {
    while (dna != "") {
        if (dna[0] in bases) {
            yield dna[0];
            dna = dna.slice(1);
        } else {
            throw new UnknownBaseError();
        }
    }
}

class UnknownBaseError extends Error {}
