class Logger {
    static messages: Array<string> = [];

    static log(level: Level, message: string): void {
        if (!(level in Level)) throw new UnknownLevel();

        const output = `[${level}] ${message}`;
        Logger.messages.push(output);
        console.log(output);
    }

    static history() {
        for (const m of Logger.messages) {
            console.log(m);
        }
    }
}

enum Level {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
}

class UnknownLevel extends Error {}

Logger.log(Level.INFO, "info test");
Logger.log(Level.WARNING, "war test");
Logger.log(Level.ERROR, "err test");
console.log("---");
Logger.history();
