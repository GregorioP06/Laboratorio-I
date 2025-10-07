// Si scriva un programma che dato un intero n calcoli e stampi il suo fattoriale. Si ricorda che il fattoriale di n è n! = 1*2*….*(n-1)*n

const n = 20;

if (n < 0 || n % 1 != 0) {
    console.error("n deve essere valido.");
    return;
}

let result = 1;
for (let i = 2; i <= n; i++) {
    result = result * i;
}

console.log(`${n}! = ${result}`);
