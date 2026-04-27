type Timestamp = {
    minute: number;
    hour: number;
    day: number;
    month: number;
    year: number;
};

type UpdateFunction<T, U> = (x: T) => U;
type Update<T, U> = { f: UpdateFunction<T, U>; timestamp: Timestamp };

class UpdateChain<A> {
    public initial_value: A;
    public updates: Update<A, A>[] = [];

    constructor(i: A) {
        this.initial_value = i;
    }

    get current_value(): A {
        let val = this.initial_value;
        for (const u of this.updates) {
            val = u.f(val);
        }
        return val;
    }

    add(update_function: UpdateFunction<A, A>, timestamp: Timestamp) {
        if (
            this.updates.length !== 0 &&
            this.is_a_earlier_than_b(
                timestamp,
                this.updates[this.updates.length - 1].timestamp,
            )
        ) {
            throw new EarlierUpdateError("errore", timestamp);
        }

        this.updates.push({ f: update_function, timestamp });
    }

    private is_a_earlier_than_b(a: Timestamp, b: Timestamp): boolean {
        if (a.year < b.year) return true;
        if (a.year > b.year) return false;

        if (a.month < b.month) return true;
        if (a.month > b.month) return false;

        if (a.day < b.day) return true;
        if (a.day > b.day) return false;

        if (a.hour < b.hour) return true;
        if (a.hour > b.hour) return false;

        if (a.minute < b.minute) return true;
        return false;
    }
}

class EarlierUpdateError extends Error {
    public timestamp: Timestamp;
    constructor(msg: string, t: Timestamp) {
        super(msg);
        this.timestamp = t;
    }
}
