function graph(
    f,
    minX = -10,
    maxX = 10,
    minY = -5,
    maxY = 5,
    resolution = 0.5
) {
    let output_graph = "";

    for (let y = maxY; y >= minY; y -= resolution) {
        for (let x = minX; x <= maxX; x += resolution) {
            if (Math.abs(f(x) - y) <= resolution / 2) {
                output_graph += "*";
            } else if (y == 0 && x == 0) {
                output_graph += "┼";
            } else if (y == 0) {
                output_graph += "─";
            } else if (x == 0) {
                output_graph += "│";
            } else {
                output_graph += " ";
            }
        }
        output_graph += "\n";
    }

    return output_graph;
}

console.log(graph((x) => Math.sin(x)));
console.log(graph((x) => x ** 2 - 3, -5, 5, -5, 5, 0.25));
