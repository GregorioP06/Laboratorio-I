function myReduce(
    arr: number[],
    f: (x: number, y: number) => number,
    x: number,
): number {
    if (arr.length === 0) {
        return x;
    }
    let [cur, ...altri] = arr;
    return f(cur, myReduce(altri, f, x));
}
