class CheckingAccount extends Account {
    constructor(number, overDraftLimit) {
        super(number);
        this.overDraftLimit = overDraftLimit;
    }

    getOverDraftLimit() {
        return this.overDraftLimit;
    }

    setOverDraftLimit(overDraftLimit) {
        this.overDraftLimit = overDraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount must be greater than 0");
        }

        if (amount > (this._balance + this.getOverDraftLimit)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": overdraft limit " + this.overDraftLimit;
    }

    endOfMonth() {
        if(this._balance < 0)
            return `Warning, low balance ${this.constructor.name} ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`;
    }
}