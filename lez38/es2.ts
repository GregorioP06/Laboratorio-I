interface IPrice {
    price: number;
}

type Enumeration = "crescente" | "decrescente";

function sortByPrice<T extends IPrice>(
    objs: T[],
    enumerazione: Enumeration,
): void {
    if (enumerazione === "crescente") {
        objs.sort((a, b) => a.price - b.price);
    } else {
        objs.sort((a, b) => b.price - a.price);
    }
}

const objs = [
    {
        price: 10,
    },
    {
        price: 15,
    },
    {
        price: 12,
    },
];

sortByPrice(objs, "decrescente");
console.log(objs);
