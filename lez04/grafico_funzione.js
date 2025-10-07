function f(x) {
    return Math.sin(x);
}

let minX = -10;
let maxX = 10;
let minY = -5;
let maxY = 5;
let r = 0.5;

graph = "";

for (let y = maxY; y >= minY; y -= r) {
    for (let x = minX; x <= maxX; x += r) {
        if (Math.abs(f(x) - y) <= r / 2) {
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
