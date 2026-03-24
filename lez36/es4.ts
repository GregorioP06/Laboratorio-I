enum Dir {
    Nord,
    Sud,
    Est,
    Ovest,
}

interface Step {
    d: Dir;
    l: number;
}

type Point = [number, number];

function walk(o: Point, p: Step[]): Point {
    const result: Point = [o[0], o[1]];

    for (const step of p) {
        switch (step.d) {
            case Dir.Nord:
                result[1] += step.l;
                break;
            case Dir.Sud:
                result[1] -= step.l;
                break;
            case Dir.Est:
                result[0] += step.l;
                break;
            case Dir.Ovest:
                result[0] -= step.l;
                break;
        }
    }

    return result;
}

type Trasformatore = (x: Point) => Point | string | number;

function applica(o: Point, p: Step[], f?: Trasformatore) {
    o = walk(o, p);
    if (f) {
        return f(o);
    }
    return o;
}
