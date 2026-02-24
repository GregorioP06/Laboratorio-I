class MapStation {
    // grafo rappresentato con liste di adiacenza
    grafo = {};
    size = 0;

    binario(u, v) {
        // se u non è nel grafo crealo
        if (!(u in this.grafo)) {
            this.grafo[u] = [];
            this.size++;
        }
        // se v non è nel grafo crealo
        if (!(v in this.grafo)) {
            this.grafo[v] = [];
            this.size++;
        }
        this.grafo[u].push(v);
        this.grafo[v].push(u);
    }

    diretto(u, v) {
        return this.grafo[u].includes(v);
    }

    #DFS(u, v, visited) {
        if (u === v) return [u];
        if (visited[u] === true) return null;

        visited[u] = true;

        for (const n of this.grafo[u]) {
            const percorso = this.#DFS(n, v, visited);
            if (percorso) return [u, ...percorso];
        }
        return null;
    }

    raggiungibile(u, v) {
        // se esiste un percorso tra u e v allora è raggiungibile
        if (this.percorso(u, v)) return true;
        return false;
    }

    percorso(u, v) {
        // tiene traccia di quali nodi sono già stati visitati
        const visited = {};
        for (const s in this.grafo) {
            visited[s] = false;
        }

        return this.#DFS(u, v, visited);
    }
}