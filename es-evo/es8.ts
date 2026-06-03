class BArray<T> {
    private values: T[];
    private offset: number;

    constructor(a: number, b: number, init: T) {
        if (b <= a) throw new OutOfBoundsError(0, [a, b]);
        this.offset = -a;
        this.values = Array(b - a);
        this.values.fill(init);
    }

    get length() {
        return this.values.length;
    }

    get(i: number): T {
        if (i < -this.offset || i > -this.offset + this.length - 1) {
            throw new OutOfBoundsError(i, [
                -this.offset,
                this.length - this.offset,
            ]);
        }
        return this.values[i + this.offset];
    }

    set(i: number, v: T): void {
        if (i < -this.offset || i > -this.offset + this.length - 1) {
            throw new OutOfBoundsError(i, [
                -this.offset,
                this.length - this.offset,
            ]);
        }
        this.values[i + this.offset] = v;
    }
}

class OutOfBoundsError extends Error {
    index: number;
    bounds: [number, number];

    constructor(index: number, bounds: [number, number], msg?: string) {
        super(msg);
        this.index = index;
        this.bounds = bounds;
    }
}

// user:
// indexes = -4, -3, -2

// internal state:
// indexes = 0, 1, 2
// length = 3
// offset = 4
