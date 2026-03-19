function test(a = "test") {
    if (a) return a + "abc";
    return a;
}

console.log("ciao:" + test(""));
console.log("ciao:" + test(undefined));
console.log("ciao:" + test(null));
console.log("ciao:" + test("pippo"));
console.log("ciao:" + test());
