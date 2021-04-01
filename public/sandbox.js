"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invoice_js_1 = require("./classes/Invoice.js");
//Creating an instance
var invOne = new Invoice_js_1.Invoice('John', 'Payment', 500);
//Create an array to store all invoice
//Only objects that is created by Invoice class will be allowed to be stored inside the array
var invoices = [];
invoices.push(invOne);
//target the form element then declare it 
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
