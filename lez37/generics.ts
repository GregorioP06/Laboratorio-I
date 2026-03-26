function identity(arg: number): number {
    return arg;
}

function identityGenerics<T>(arg: T): T {
    return arg;
}

function identityGenerics2<T, P>(arg1: T, arg2: P): number {
    return 0;
}

let output = identityGenerics("hello");
// let output = identityGenerics<number>("hello");      // <- errore
let output2 = identityGenerics<string>("hello");
let output3: string = identityGenerics<string>("hello");

// function logging<T>(arg: T): T {
//     console.log(arg.length);         // <- errore
//     return arg;
// }

let fun = identityGenerics;
let fun2: <U>(x: U) => U = identityGenerics;

interface IGenericIdentityFn {
    <T>(arg: T): T;
}

let fun3: IGenericIdentityFn = identityGenerics;
