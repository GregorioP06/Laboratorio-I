let studenti = [];

while (true) {
    let nome = prompt("Nome: ");
    if (nome === "stop") {
        break;
    }
    let voti_esami = [];
    for (let i = 0; i < 3; i++) {
        let voto = Number(prompt("Voto: "));
        voti_esami.push(voto);
    }
    studenti.push({ nome, voti_esami });
}

for (let s of studenti) {
    let media = 0;
    for (let v of s.voti_esami) {
        media += v;
    }
    media = media / s.voti_esami.length;
    console.log(s.nome + ": " + media.toFixed(2));
}
