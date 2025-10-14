// y = ax+c
// y = bx+d

const a = 1;
const c = 7;
const b = 1;
const d = -3;

if (a === b) {
    console.log("Le rette sono parallele (nessuna intersezione).");
    return;
}

const x = (c - d) / (b - a);
const y = b * x + d;

console.log(`Intersezione in: (${x}, ${y})`);
