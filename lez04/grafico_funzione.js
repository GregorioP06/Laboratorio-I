function f(x) {
    return x ** 3;
}

let minX = -10;
let maxX = 10;
let minY = -5;
let maxY = 5;
let r = 1;

graph = "";

for (let y = maxY; y >= minY; y -= r) {
    for (let x = minX; x <= maxX; x += r) {
        if (Math.round(f(x)) == y) {
            graph += "*";
        } else if (y == 0 && x == 0) {
            graph += "┼";
        } else if (y == 0) {
            graph += "─";
        } else if (x == 0) {
            graph += "│";
        } else {
            graph += " ";
        }
    }
    graph += "\n";
}

console.log(graph);
