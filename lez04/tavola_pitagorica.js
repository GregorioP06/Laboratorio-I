const n = 10 + 1;

let tavola = [...Array(n)].map((e) => Array(n));

for (let i = 0; i < n; i++) {
    tavola[i][0] = i;
    for (let j = 0; j < n; j++) {
        tavola[0][j] = j;
    }
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        tavola[i][j] = i * j;
    }
}

output = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        output +=
            tavola[i][j]
                .toString()
                .padStart(tavola[n - 1][j].toString().length) + " ";
    }
    output += "\n";
}

console.log(output);
