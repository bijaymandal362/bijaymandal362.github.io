class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    addInterest() {
        let depsoitAmt = (super.getBalance() * this.interest) / 100;
        super.deposit(depsoitAmt);
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest :" + this.interest;
    }

    endOfMonth() {
        const amount = this._balance * this._interest / 100;
        this.addInterest();
        return `Interest added ${this.constructor.name} ${this._number}: balance: ${this._balance} interest: ${amount}`;
    }
}