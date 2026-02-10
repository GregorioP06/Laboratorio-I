class C {
    static pippo = 9000;
    #privato() {
        return "Hello ";
    }
    pubblico() {
        return this.#privato() + "world!";
    }
}

class D extends C {
    static baz = 42;
    test() {
        return this.pubblico() + " Wow!";
    }
}

let foo = new C();
let bar = new D();

console.log(foo.pubblico());
console.log(bar.test());
console.log(D.baz);
console.log(D.pippo);
