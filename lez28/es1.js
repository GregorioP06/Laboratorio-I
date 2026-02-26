class Grade {
    name;
    credits;
    date;
    grade;
    honors;

    constructor(name, credits, date, grade, honors) {
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
