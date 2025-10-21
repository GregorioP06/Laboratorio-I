function ordinaPersone(p) {
    p.sort((a, b) => {
        if (a.nome !== b.nome) {
            return a.nome.localeCompare(b.nome);
        }
        return b.eta - a.eta;
    });
}
