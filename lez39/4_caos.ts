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

    // x(n+1) = 4 x(n) (1 - x(n))
    *values(): Generator<T> {
        const next = 4 * this.x * (1 - this.x);
        this.x = next;
        yield this.transform(this.x);
    }

    divergenceStep(epsilon: number, steps: number, threshold: number) {
        const other = new LogisticRNG(
            this.seed + epsilon,
            this.transform,
            this.distance,
        );

        while (steps > 0) {
            if (
                this.distance(this.values().next(), other.values().next()) >
                threshold
            ) {
            }
        }
    }

    reduce(steps, f, initialValue) {}

    reset(seed: number = this.seed): void {
        this.x = seed;
    }
}
