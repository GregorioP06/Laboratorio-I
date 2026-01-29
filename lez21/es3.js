function prodEstremi(A) {
    const nums = A.toSorted((a, b) => a - b);
    const res = [];

    for (let i = 0; Math.ceil(i < nums.length / 2); i++) {
        res.push(nums[i] * nums[nums.length - 1 - i]);
    }

    return res;
}

const r = prodEstremi([2, 8, 4, 1, 0]);
console.log(r);
console.log(prodEstremi([10, 3, 7, 1, 0, 3, 1, 4]));
