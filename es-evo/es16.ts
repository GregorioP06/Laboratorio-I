class SecretError extends Error {}

class SecretBox<T> {
    #box: { [k: string]: { pin: number; val: T } } = {};
    #size: number = 0;

    putS(k: string, pin: number, val: T): void {
        if (k in this.#box) {
            if (this.#box[k].pin === pin) {
                this.#box[k].val = val;
            } else {
                throw new SecretError();
            }
        } else {
            this.#box[k] = { pin, val };
            this.#size++;
        }
    }

    getS(k: string, pin: number): T {
        if (k in this.#box && this.#box[k].pin === pin) {
            return this.#box[k].val;
        }
        throw new SecretError();
    }

    delS(k: string, pin: number): void {
        if (k in this.#box && this.#box[k].pin === pin) {
            delete this.#box[k];
            this.#size--;
        } else {
            throw new SecretError();
        }
    }

    get size(): number {
        return this.#size;
    }
}
