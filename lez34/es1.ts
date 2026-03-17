class Counter {
    value: number;
    static default_value: number = 0;

    constructor(val: number | undefined) {
        if (val === undefined) this.value = Counter.default_value;
        else this.value = val;
    }

    increment(x: number): void {
        if (x <= 0) throw new RangeError("x deve essere >0");
        this.value += x;
    }

    decrement(x: number): void {
        if (x <= 0) throw new RangeError("x deve essere >0");
        this.value -= x;
    }
}

let c1: Counter = new Counter(undefined);
console.log(c1.value);
c1.increment(5);
console.log(c1.value);

let c2: Counter = new Counter(10);
console.log(c2.value);
c2.decrement(2);
console.log(c2.value);
