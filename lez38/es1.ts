interface Product {
    name: string;
    price: number;
    category: string;
}

function createDiscount(discount: number = 10) {
    return (p: Product): void => {
        p.price *= 1 - discount / 100;
    };
}

const obj = { name: "a", price: 80, category: "c" };
const fun = createDiscount(50);
fun(obj);
console.log(obj.price);
