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

enum Outcome {
    Silence,
    Fire,
}

type DataPoint<T> = [T[], Outcome];
type Dataset<T> = DataPoint<T>[];

// fine import

class Perceptron extends LinearClassifier {
    private learnRate: number;

    constructor(weights: number[], bias: number, learnRate: number = 1) {
        super(weights, bias);
        this.learnRate = learnRate;
    }

    accuracy(dataset: Dataset<number>): number {
        let correct = 0;

        for (const dp of dataset) {
            if (this.predict(dp[0]) === dp[1]) correct++;
        }

        return correct / dataset.length;
    }

    train(dataset: Dataset<number>, epochs: number = 5): void {
        for (let e = 0; e < epochs; e++) {
            for (const dp of dataset) {
                const sample = dp[0];
                const label = dp[1];

                const prediction = this.predict(sample);

                if (prediction !== label) {
                    const errore = label - prediction;
                    for (let i = 0; i < this.weights.length; i++) {
                        this.weights[i] += this.learnRate * errore * sample[i];
                    }
                    this.bias += this.learnRate * errore;
                }
            }
        }
    }
}

// AND
const datasetAND: Dataset<number> = [
    [[0, 0], 0],
    [[0, 1], 0],
    [[1, 0], 0],
    [[1, 1], 1], // vero se e solo se entrambi veri
];
const perc_AND = new Perceptron([1, 1], 1);

function mostraRisultati(
    p: Perceptron,
    dataset: Dataset<number>,
    name: string = "",
) {
    console.log(`Perceptor name: ${name}`);
    const before = p.accuracy(dataset);
    p.train(dataset);
    const after = p.accuracy(dataset);
    console.log(`Before: ${before}\nAfter: ${after}\n-----`);
}

mostraRisultati(perc_AND, datasetAND, "AND");

// OR
const datasetOR: Dataset<number> = [
    [[0, 0], 0], // falso se e solo se entrambi falsi
    [[0, 1], 1],
    [[1, 0], 1],
    [[1, 1], 1],
];
const perc_OR = new Perceptron([0, 0], 0);

mostraRisultati(perc_OR, datasetOR, "OR");
