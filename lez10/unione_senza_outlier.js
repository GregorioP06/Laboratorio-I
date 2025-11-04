function unioneSenzaOutlier(A, B, epsilon) {
    let media = 0;
    let count = 0;
    for (const x in A) {
        media += x;
        count++;
    }
    for (const x in B) {
        media += x;
        count++;
    }
    media = media / count;

    let result = {};
    for (const x in A) {
        if (Math.abs(x - media) < epsilon) {
            result[x] = 1;
        }
    }
    for (const x in B) {
        if (Math.abs(x - media) < epsilon) {
            result[x] = 1;
        }
    }
}

console.log(unioneSenzaOutlier({ 0: 1, 1: 1, 2: 2 }));
