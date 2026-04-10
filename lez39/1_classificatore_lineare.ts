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
