class InvalidCreditsError extends Error {}
class InvalidValueError extends Error {}
class DuplicatedGradeError extends Error {}
class MissingCreditsError extends Error {}

class Grade {
    name;
    credits;
    date;
    grade;
    honors;

    constructor(name, credits, date, grade, honors) {
        if (credits <= 0) {
            throw new InvalidCreditsError(
                "Crediti deve essere un numero positivo.",
            );
        }
        if (grade < 18 || grade > 30) {
            throw new InvalidValueError(
                "Voto deve essere compreso tra 18 e 30.",
            );
        }
        if (honors && grade !== 30) {
            throw new InvalidValueError("Lode ma non 30.");
        }
        this.name = name;
        this.credits = credits;
        this.date = date;
        this.grade = grade;
        this.honors = honors;
    }

    equals(g) {
        return (
            this.name === g.name &&
            this.credits === g.credits &&
            this.date === g.date &&
            this.grade === g.grade &&
            this.honors === g.honors
        );
    }

    toString() {
        return `name=${this.name};credits${this.credits};date=${this.date};grade=${this.grade};honors=${this.honors}`;
    }
}

class GradeBook {
    grades = [];

    constructor(totalCredits) {
        this.totalCredits = totalCredits;
    }

    get credits() {
        return this.grades.reduce((acc, cur) => acc + cur.credits, 0);
    }

    get missingCredits() {
        return this.totalCredits - this.credits;
    }

    get average() {
        let sum = 0;
        let credits = 0;
        for (const g of this.grades) {
            sum += (g.honors ? 32 : g.grade) * g.credits;
            credits += g.credits;
        }
        return sum / credits;
    }

    get startingGrade() {
        if (this.missingCredits > 0)
            throw new MissingCreditsError("Mancano ancora crediti.");
        return Math.round((this.average * 11) / 3);
    }

    register(grade) {
        if (!(grade instanceof Grade))
            throw new TypeError("register accetta oggetti di tipo Grade.");

        if (this.grades.find((g) => g.equals(grade)))
            throw new DuplicatedGradeError(
                `Esame ${grade.name} è già stato registrato.`,
            );
        this.grades.push(grade);
    }

    toString() {
        let s = "VOTI:\n";
        for (let g of this.grades) s += "\t" + g.toString() + "\n";
        return s;
    }
}

class BachelorGradeBook extends GradeBook {
    constructor() {
        super(180);
    }
}

class MasterGradeBook extends GradeBook {
    constructor() {
        super(120);
    }
}
