function cugini(n) {
    let a = null;
    let b = null;

    let x = n;
    while (!a) {
        if (isGrazioso(x)) a = x;
        x--;
    }

    x = n;
    while (!b) {
        if (isGrazioso(x)) b = x;
        x++;
    }

    return [a, b];
}

function isGrazioso(n) {
    return (
        n %
            Number.parseInt(
                n
                    .toString()
                    .split("")
                    .map((x) => Number.parseInt(x))
                    .sort((a, b) => a - b)
                    .map((x) => x.toString())
                    .join(""),
            ) ===
        0
    );
}
