type Point = [number, number];

interface List {
    val: Point;
    next: List | null;
}

function filter(l: List | null, p: (x: Point) => boolean): Array<Point> {
    let res: Point[] = [];
    if (l === null) return [];

    res = res.concat(filter(l.next, p));

    if (p(l.val)) {
        res.unshift(l.val);
        return res;
    }

    return res;
}

function sortedFilter(l: List | null, p: (x: Point) => boolean): Array<Point> {
    let res: Point[] = filter(l, p);
    res.sort((a: Point, b: Point) => {
        if (a[0] - b[0] !== 0) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    return res;
}
