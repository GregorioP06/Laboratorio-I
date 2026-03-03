class InvalidCreditsError extends Error {}
class InvalidValueError extends Error {}

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
