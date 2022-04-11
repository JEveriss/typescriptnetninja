"use strict";
// const anchor = document.querySelector("a")!;
// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector("form")!;
// console.log(form);
// classes
class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    //   // these are 'access modifiers' that allow certain access to the information.
    //   // Public is default - can be seen and changed
    //   // Readonly - can be seen but not changed
    //   // Private - neither
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // this shorter way of writing only works with the access modifiers
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
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
