//Implements HasFormater to make sure the objects created by this class will follow the HasFormater structure
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} because of ${this.details}`;
    }
}
