// Trova il più piccolo numero perfetto maggiore dell'input
// https://it.wikipedia.org/wiki/Numero_perfetto

const n = 1000;

output = "";
found = false;
let current = n - 1;

while (true) {
    let tot = 0;
    output = "";
    current++;

    for (let i = 1; i < current; i++) {
        if (current % i == 0) {
            tot += i;
        }
    }
    if (tot == current) {
        output = output.slice(0, -3);
        break;
    }
}

console.log(`n = ${n}. ${current}: ${output}`);
