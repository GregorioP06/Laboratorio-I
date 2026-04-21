interface I {
    name: string;
    surname: string;
}

function merge<T extends I>(a: T[], b: T[]): T[] {
    let result: T[] = [];

    // elimina i duplicati di a
    for (const e of a) {
        const duplicate: number = result.findIndex(
            (x: T) => x.name === e.name && x.surname === e.surname,
        );
        if (duplicate === -1) {
            result.push(e);
        }
    }

    // elimina i duplicati di b
    const b_filtered: T[] = [];
    for (const e of b) {
        const duplicate: number = b_filtered.findIndex(
            (x: T) => x.name === e.name && x.surname === e.surname,
        );
        if (duplicate === -1) {
            b_filtered.push(e);
        }
    }

    // in caso di duplicati tieni quello di b
    for (const e of b_filtered) {
        let duplicate: number = result.findIndex(
            (x: T) => x.name === e.name && x.surname === e.surname,
        );
        while (duplicate !== -1) {
            result.splice(duplicate, 1);
            duplicate = result.findIndex(
                (x: T) => x.name === e.name && x.surname === e.surname,
            );
        }
        result.push(e);
    }

    // ordina
    result.sort((a: T, b: T) => {
        let sur: number = a.surname.localeCompare(b.surname);
        if (sur !== 0) return sur;
        return a.name.localeCompare(b.name);
    });

    return result;
}
