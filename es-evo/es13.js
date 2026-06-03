class Employee {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get id() {
        return this.surname + this.name;
    }
}

class Schedule {
    #tasks = {};

    add(task, employee) {
        if (!(employee.id in this.#tasks)) {
            this.#tasks[employee.id] = [];
        }
        this.#tasks[employee.id].push(task);
    }

    getTasks(employee) {
        if (employee.id in this.#tasks) {
            return this.#tasks[employee.id].sort((a, b) => a.localeCompare(b));
        }
        return [];
    }

    free(employee) {
        if (employee.id in this.#tasks) {
            delete this.#tasks[employee.id];
        } else {
            throw new MissingEmployee();
        }
    }
}

class MissingEmployee extends Error {}
