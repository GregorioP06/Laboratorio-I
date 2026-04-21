enum RequestState {
    Draft = -1,
    Review = 0,
    Rejected = -2,
    Approved = 1,
    Archived = 3,
}

class MyRequest {
    readonly title: string;
    _content: string;
    private _state: RequestState;

    constructor(t: string, c: string = "TBD") {
        this.title = t;
        this._content = c;
        this._state = RequestState.Draft;
    }

    get state(): RequestState {
        return this._state;
    }

    get content(): string {
        return this._content;
    }

    set content(val: string) {
        if (
            this.state === RequestState.Draft ||
            this.state === RequestState.Rejected
        ) {
            this.content = val;
        } else {
            throw new InvalidOperationError();
        }
    }

    advance(new_state: RequestState): void {
        if (
            new_state === RequestState.Draft &&
            this._state !== RequestState.Rejected
        )
            throw new InvalidTransitionError(this._state, new_state);
        else if (
            new_state === RequestState.Review &&
            this._state !== RequestState.Draft
        )
            throw new InvalidTransitionError(this._state, new_state);
        else if (
            new_state === RequestState.Rejected &&
            this._state !== RequestState.Review
        )
            throw new InvalidTransitionError(this._state, new_state);
        else if (
            new_state === RequestState.Approved &&
            this._state !== RequestState.Review
        )
            throw new InvalidTransitionError(this._state, new_state);
        else if (
            new_state === RequestState.Archived &&
            this._state !== RequestState.Approved
        )
            throw new InvalidTransitionError(this._state, new_state);

        this._state = new_state;
    }
}

function score(reqeusts: MyRequest[]): number {
    let val = 0;
    for (const r of reqeusts) {
        val += r.state;
    }

    return val;
}

class InvalidTransitionError extends Error {
    current_state: RequestState;
    target_state: RequestState;
    constructor(c: RequestState, t: RequestState) {
        super();
        this.current_state = c;
        this.target_state = t;
    }
}

class InvalidOperationError extends Error {}
