function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

let obj = { label: 10, x: "ciao" };
printLabel(obj);
let correctobj = { label: "abc" };
printLabel(correctobj);
