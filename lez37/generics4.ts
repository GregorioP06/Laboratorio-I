interface ILength {
    length: number;
}

function logging<T extends ILength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

function logging2(arg: ILength): ILength {
    console.log(arg.length);
    return arg;
}

logging({ length: 2, abc: 3 });
// logging2({ length: 2, abc: 3 });

interface ITest {
    length: number;
    abc: string;
}

let obj: ITest = { length: 3, abc: "abc" }; // viene accettato perché
// rispetta comunque l'interfaccia di ILength

let res1: ILength = logging2(obj); // res1 ora è ILength, non più ITest

let res2: ITest = logging2(obj) as ITest; // res2 rimane ITest con type assertion
