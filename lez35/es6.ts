function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

let result1 = buildName("A");
let result2 = buildName("A", "B");
let result3 = buildName("A", "B", "C");

// diverso

function test(a: number | undefined) {}
test();

function test2(a?: number) {}
test2();
