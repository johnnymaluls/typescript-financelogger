//LESSON 16 
import { HasFormater } from '../interfaces/HasFormater';

//LESSON 12 

//Implements HasFormater to make sure the objects created by this class will follow the HasFormater structure
export class Invoice implements HasFormater {

    constructor(
        public client: string,
        public details: string,
        public amount: number) { }

    format() {
        return `${this.client} owes you ${this.amount} because of ${this.details}`;
    }

}