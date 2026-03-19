// convenzione: gli identificatori delle interfacce iniziano con I
interface IPerson {
    name: string;
    surname: string;
}

// possono essere estese come le classi
interface IEmployee extends IPerson {
    empCode: number;
}

let empObj: IEmployee = { empCode: 1, name: "mario", surname: "rossi" };
let empObj2: IEmployee = {
    empCode: 1,
    name: "mario",
    surname: "rossi",
    test: 1,
};
