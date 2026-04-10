class LogisticRNG<T> {
    private seed: number;
    private transform: (n: number) => T;
    private distance: (v1: T, v2: T) => number;
    private x: number;

    constructor(
        seed: number,
        transform: (n: number) => T,
        distance: (v1: T, v2: T) => number,
    ) {
        if (seed <= 0 || seed >= 1) throw new Error();

        this.seed = seed;
        this.x = seed;
        this.transform = transform;
        this.distance = distance;
    }

    *values(): Generator<T> {
        this.x = this.seed;
        while (true) {
            this.x = 4 * this.x * (1 - this.x);
            yield this.transform(this.x);
        }
    }

    divergenceStep(epsilon: number, steps: number, threshold: number): number {
        const other = new LogisticRNG(
            this.seed + epsilon,
            this.transform,
            this.distance,
        );

        let i = 1;
        while (i <= steps) {
            if (
                this.distance(
                    this.values().next().value,
                    other.values().next().value,
                ) > threshold
            ) {
                return i;
            }
            i++;
        }
        return -1;
    }

    reduce<U>(steps: number, f: (acc: U, cur: T) => U, initialValue: U): U {
        let acc: U = initialValue;
        for (let i = 0; i < steps; i++) {
            acc = f(acc, this.values().next().value);
        }
        return acc;
    }

    reset(seed: number = this.seed): void {
        if (seed <= 0 || seed >= 1) throw new Error();
        this.x = seed;
        this.seed = seed;
    }

    static toUniform(x: number): number {
        return (2 / Math.PI) * Math.asin(Math.sqrt(x));
    }
}

// ESEMPI DI TEST

const seed: number = 0.3;
const epsilon: number = 1e-6;
const steps: number = 50000;

// generatore di valori uniformi in [0,1]
let rng: LogisticRNG<number> = new LogisticRNG<number>(
    seed,
    (x) => LogisticRNG.toUniform(x),
    (a, b) => Math.abs(a - b),
);

console.log("Primi 5 valori uniformi:");
let gen: Generator<number> = rng.values();
for (let i = 0; i < 5; i++) {
    console.log("\t", gen.next().value);
}

console.log("\nPrimo passo di divergenza:");
console.log("\t", rng.divergenceStep(epsilon, steps, 1e-5));

console.log("\nMedia empirica dei primi 10000 valori:");
let avg: number = rng.reduce(10000, (acc, x) => acc + x, 0) / 10000;
console.log("\t", avg);
