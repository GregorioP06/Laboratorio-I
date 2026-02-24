class MediaMobile {
    #k;
    #nums;

    constructor(k, ...nums) {
        this.#k = k;
        this.#nums = nums;
    }

    *succ() {
        let j = 0;
        while (true) {
            // controlla se bisogna calcolarlo
            if (this.#nums[j] === undefined) {
                let sum = 0;
                for (let i = 1; i <= this.#k; i++) {
                    sum += this.#nums[j - i];
                }
                const result = Math.floor(sum / this.#k);
                this.#nums[j] = result;
            }
            yield this.#nums[j++];
        }
    }
}