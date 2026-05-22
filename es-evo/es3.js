class Cerchio {
    centro;
    raggio;

    constructor(centro, raggio) {
        if (
            centro.length !== 2 ||
            !Number.isFinite(centro[0]) ||
            !Number.isFinite(centro[1]) ||
            !Number.isFinite(raggio)
        )
            throw new TypeError();
        if (raggio < 0) throw new RangeError();
        this.centro = centro;
        this.raggio = raggio;
    }
}

function vicino(punto, cerchi) {
    let min_distance = Infinity;
    let min_cerchio = null;

    for (const c of cerchi) {
        const distance =
            Math.sqrt(
                (punto[0] - c.centro[0]) ** 2 + (punto[1] - c.centro[1]) ** 2,
            ) - c.raggio;
        if (distance < min_distance) {
            min_distance = distance;
            min_cerchio = c;
        }
    }

    if (min_distance > 0) {
        min_cerchio.raggio += min_distance;
    }
    return min_cerchio;
}
