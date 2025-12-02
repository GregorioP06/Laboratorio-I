let gl = {
    0: [1, 2],
    1: [],
    2: [0, 1, 3, 4],
    3: [4],
    4: [1],
};

let gm = [
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
];

function bidirezionale_list(g, i, j) {
    return g[i].includes(j) && g[j].includes(i);
}
function bidirezionale_matrix(g, i, j) {
    return g[i][j] === 1 && g[j][i] === 1;
}

function grado_list(g, n) {
    let grado = g[n].length;
    for (const archi in g) {
        if (g[archi].includes(n)) grado++;
    }
    return grado;
}

function grado_matrix(g, n) {
    // let grado = 0;
    // for (const arco of g[n]) {
    //     if (arco === 1) grado++;
    // }
    let grado = g[n].filter((x) => x === 1).length;

    for (const nodo in g) {
        if (g[nodo][n] === 1) grado++;
    }

    return grado;
}

function trasponi_list(g) {}
function trasponi_matrix(g) {}

console.log("Bidirezionale");
console.log(bidirezionale_list(gl, 0, 2));
console.log(bidirezionale_matrix(gm, 0, 2));

console.log("Grado");
console.log(grado_list(gl, 0));
console.log(grado_matrix(gm, 0));
