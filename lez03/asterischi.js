// Si scriva un programma che dato un intero n stampi n asterischi sulla prima linea, n − 2 asterischi sulla seconda linea, n − 4 sulla terza e così via, fino ad arrivare a stampare uno o due asterischi sull’ultima linea

const n = 10;

if (n < 0) {
    console.error("n deve essere >= 0");
    return;
}

for (let i = n; i > 0; i -= 2) {
    console.log("*".repeat(i));
}
