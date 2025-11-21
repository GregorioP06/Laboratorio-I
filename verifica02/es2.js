function comparatoreTask(criterio, ascendente) {
    if (criterio === "priorita") {
        if (ascendente) {
            return (t1, t2) => {
                // ordine crescente di priorità
                return t1.priorita - t2.priorita;
            };
        }
        return (t1, t2) => {
            // ordine decrescente di priorità
            return t2.priorita - t1.priorita;
        };
    } else if (criterio === "id") {
        if (ascendente) {
            return (t1, t2) => {
                return t1.id.localeCompare(t2.id);
            };
        }
        return (t1, t2) => {
            return t2.id.localeCompare(t1.id);
        };
    } else {
        // caso criterio non specificato / "dipendenze"
        // ascendente è vero o non è specificato (default)
        if (ascendente === true || ascendente === undefined) {
            // ordine dipendenze crescente
            return (t1, t2) => {
                return t1["dipendenze"].length - t2["dipendenze"].length;
            };
        }

        return (t1, t2) => {
            // ordine dipendenze decrescente
            return t2["dipendenze"].length - t1["dipendenze"].length;
        };
    }
}
