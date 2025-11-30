// comando: risolvere con reduce
function isSorted(a) {
    return a.reduce((res, cur, curIndex) => {
        if (res === false) return false;
        if (cur > a[curIndex - 1] || curIndex === 0) return true;
        return false;
    }, true);
}

console.log(isSorted([-21, -2, 0, 4, 6, 210]));
console.log(isSorted([2, 6, 8, 8, 9, 21]));
console.log(isSorted([2, 6, 8, 9, 10, -42]));
