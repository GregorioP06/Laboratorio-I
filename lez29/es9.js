function emailStudenteUnipiValida(e) {
    const pattern = /^[a-z]\.[a-z]+(([1-9][0-9]+)|[1-9])?@studenti\.unipi\.it$/;
    return pattern.test(e);
}

console.log(emailStudenteUnipiValida("g.rossi@studenti.unipi.it"));
console.log(emailStudenteUnipiValida("b.bianchi1@studenti.unipi.it"));
console.log(emailStudenteUnipiValida("j.marino13@studenti.unipi.it"));
console.log(emailStudenteUnipiValida("test"));
console.log(emailStudenteUnipiValida("k.costa@unipi.it"));
console.log(emailStudenteUnipiValida("c.ferrari0@studenti.unipi.it"));
console.log(emailStudenteUnipiValida("d.esposito@studenti.unifi.it"));
