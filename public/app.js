import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormater;
// let docTwo: HasFormater;
// docOne = new Invoice('Yoshi', 'Web Work', 250);
// docTwo = new Payment('John', 'Paper Work', 500);
// let docs: HasFormater[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// //Creating an instance
// const invOne = new Invoice('John', 'Payment', 500);
// //Create an array to store all invoice
// //Only objects that is created by Invoice class will be allowed to be stored inside the array
// let invoices: Invoice[] = [];
// invoices.push(invOne);
//target the form element then declare it 
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// LIST TEMPLATE INSTANCE
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
