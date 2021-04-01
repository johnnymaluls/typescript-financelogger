//LESSON 12 
//Implements HasFormater to make sure the objects created by this class will follow the HasFormater structure
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes you ${this.amount} because of ${this.details}`;
    }
}
