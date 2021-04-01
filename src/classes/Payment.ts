//LESSON 16 
import { HasFormater } from '../interfaces/HasFormater';

//Implements HasFormater to make sure the objects created by this class will follow the HasFormater structure
export class Payment implements HasFormater {

    constructor(
        public recipient: string,
        public details: string,
        public amount: number) { }

    format() {
        return `${this.recipient} is owed ${this.amount} because of ${this.details}`;
    }

}