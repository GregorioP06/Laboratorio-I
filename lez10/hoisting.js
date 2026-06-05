// dichiarazioni con var ignorano lo scope di blocco (ma non quello di funzione e globale)

function fun() {
    console.log(z); // undefined, perché z viene "hoistato" in cima allo scope di funzione con valore undefined
    let x = 3;
    if (true) {
        // console.log(y); // ReferenceError, dichiarazioni con let non vengono "hoistate"
        let y = 5;
        var z = 7; // qui z viene inizializzato a 7
    }
    // console.log(y); // ReferenceError, let rispetta lo scope di blocco
    console.log(z); // 7, var ignora lo scope di blocco ed è in cima a quello di funzione
}

fun();
// console.log(z); // ReferenceError
