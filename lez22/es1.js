// sovrascrivere una funzione di Math
console.log(Math.max(...[1, 2, 3]));
Math.max = () => 42;
console.log(Math.max(...[1, 2, 3]));

// aggiungere una proprietà al prototipo dell'array
console.log(Object.getPrototypeOf([1, 2]));

Object.getPrototypeOf([1, 2, 3]).a = 42;

console.log(Object.getPrototypeOf([1, 2, 3, 4]));
console.log([1].a);
