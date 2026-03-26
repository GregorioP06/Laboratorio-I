function identity<T>(arg: T): T {
    return arg;
}

interface IGenericIdentityFn<T> {
    (arg: T): T;
}

let fun1: IGenericIdentityFn<number> = identity;
// let fun2: IGenericIdentityFn = identity;        // <- errore
