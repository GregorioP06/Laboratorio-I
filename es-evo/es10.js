function gancio(a) {
    let asc = 0;
    let des = 0;
    const gan = [];

    for (let i = 0; i < a.length - 2; i++) {
        if (a[i] === a[i + 2]) {
            if (a[i + 1] < a[i]) {
                des++;
                gan.push([a[i], a[i + 1], a[i + 2]]);
            } else if (a[i + 1] > a[i]) {
                asc++;
                gan.push([a[i], a[i + 1], a[i + 2]]);
            }
        }
    }
    return {
        num: asc + des,
        asc,
        des,
        gan,
    };
}
