function trovaCoppieVicini(p, d) {
    let result = [];
    for (let i = 0; i < p.length - 1; i++) {
        for (let j = i + 1; j < p.length; j++) {
            if (Math.abs(p[i].eta - p[j].eta) <= d) {
                result.push([p[i].nome, p[j].nome]);
            }
        }
    }
    return result;
}
