enum Color {
    Red,
    Green,
    Blue,
}

const c: Color = Color.Green;
console.log(c);

enum Letter {
    A = 10,
    B,
    C,
}

console.log(Letter.B);

enum abc {
    a = "aaaaa",
    b = 1,
    c,
}

console.log(abc.c);
