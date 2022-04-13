import { Invoice } from "./classes/invoices.js";
const invOne = new Invoice("Mario", "plumbing work", 69);
const invTwo = new Invoice("Luigi", "fixing me pipes", 420);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// typecasting
// using "as" casts it to be a certain type. "As" is never null
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
