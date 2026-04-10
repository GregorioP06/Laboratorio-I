class LinearClassifier {
    protected weights: number[];
    protected bias: number;

    constructor(weights: number[], bias: number) {
        this.weights = [...weights];
        this.bias = bias;
    }

    score(x: number[]): number {
        if (x.length !== this.weights.length) throw new Error();

        let s = this.bias;
        for (let i = 0; i < this.weights.length; i++) {
            s += this.weights[i] * x[i];
        }

        return s;
    }

    predict(x: number[]): number {
        return this.score(x) > 0 ? 1 : 0;
    }
}

// fine import

enum Outcome {
    Silence,
    Fire,
}

type DataPoint<T> = [T[], Outcome];
type Dataset<T> = DataPoint<T>[];

const datasetAND: Dataset<number> = [
    [[0, 0], 0],
    [[0, 1], 0],
    [[1, 0], 0],
    [[1, 1], 1], // vero se e solo se entrambi veri
];

const n = new LinearClassifier([1, 1], 1);
for (const dp of datasetAND) {
    console.log(`Risultato: ${n.predict(dp[0])}, atteso: ${dp[1]}`);
}

console.log("-----");

const correct = new LinearClassifier([0.5, 0.5], -0.5);
for (const dp of datasetAND) {
    console.log(`Risultato: ${correct.predict(dp[0])}, atteso: ${dp[1]}`);
}
