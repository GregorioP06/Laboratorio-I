function* range(start, end) {
    if (end === undefined) {
        [start, end] = [0, start];
    }
    let i = start;
    while (i < end) yield i++;
}

for (let i of range(1, 10)) {
    console.log(i);
}

console.log(...range(5));

function* abc() {
    yield* range(4);
    yield* range(5);
}

for (let i of abc()) {
    console.log(i);
}
