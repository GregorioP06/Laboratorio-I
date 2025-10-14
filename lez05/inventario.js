let inventario = {};

while (true) {
    let key = prompt("Prodotto: ");
    if (key === "stop") {
        break;
    }
    let value = prompt("Quantità: ");
    inventario[key] = value;
}

let output = "";
for (let key in inventario) {
    output += `(${key}, ${inventario[key]}) `;
}
output = output.slice(0, -1);

console.log(output);
