interface IClock {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements IClock {
    currentTime: Date = new Date();
    setTime(d: Date): void {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}
