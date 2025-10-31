function top_k_elementi(input_array) {
    const r = [];

    for (const item in input_array) {
        r.push([item, input_array[item]]);
    }

    r.sort((a, b) => {
        return b[1] - a[1];
    });

    r.splice(3);

    return r.map((x) => x[0]);
}

const output = top_k_elementi({ a: 5, b: 2, c: 8, d: 1, e: 6 });
console.log(output);
