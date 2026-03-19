let myAdd = function (x: number, y: number): number {
    return x + y;
};

let mySub: (x: number, y: number) => number = function (a, b) {
    return a - b;
};

console.log(typeof myAdd);
console.log(typeof mySub);
