class Distanza {
    static #mile = 1.60934;
    #distanza_in_km = 0;

    get km() {
        return this.#distanza_in_km;
    }
    set km(v) {
        this.#distanza_in_km = v;
    }

    get miglia() {
        return this.#distanza_in_km / Distanza.#mile;
    }
    set miglia(v) {
        this.#distanza_in_km = v * Distanza.#mile;
    }
}

d = new Distanza();

d.km = 10;
console.log(d.km);
console.log(d.miglia);
d.miglia = 10;
console.log(d.km);
console.log(d.miglia);
