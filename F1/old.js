'use strict';

// // scoppe chain
// function calcAge(birthYear){
//     const age = 2022 - birthYear;
//     function printAge(){
//         const outPut = ` ${firstName},  You are ${age} born in ${birthYear}` // firstName in global scope
//         console.log(outPut);

//         if(birthYear >= 1981 && birthYear <= 1996)
//         {
//             // new block scope
//             const str = `Oh, and you are a millenial ${firstName}`
//             console.log(str);
//             function add(a,b){
//                 return a+b
//             }
//         }
//         // console.log(str); // not defined bc block scope var is open scope
//         // add(2,3) // add is not defined bc use strict
//     }
//     printAge();
//     return age;
// }
// // console.log(age); // not defined out of scope
// const firstName = "Emad" // global veriable
// calcAge(1998)
// // printAge() // not defined out of scope

// hoisting and TDZ

// console.log(me);  // undefined
// console.log(job); // Cannot access 'job' before initialization
// console.log(year); //Cannot access 'year' before initialization

// var me = "Emad"
// let job = "Software Engineer"
// const year = 1998;

// funcrion 
// console.log(addDecl(2,3)); // 5
// console.log(addExpr(2,4)); //Cannot access 'addExpr' before initialization
// console.log(addArrow(2,5));//Cannot access 'addArrow' before initialization
//  // if we use Var instead of const "addArrow is not a function" // undefined

// // declartion 
// function addDecl(a,b){
//     return a+b
// }
// //expression
// const addExpr = function(a,b){
//     return a+b
// }
// // arrow function
// const addArrow = (a,b)=>{ a+b }

// //----------------------

// this keyword

// console.log(this);

// const calcAge  = function(birthYear){
//     console.log(2022-birthYear);
//     console.log(this); // undefined
// }
// calcAge(1998)

// const calcAgeArrow  = (birthYear) => {
//     console.log(2022-birthYear);
//     console.log(this); // window
// }
// calcAgeArrow(1998)

// const Emad = {
//     Year : 1998,
//     calcAge : function(){
//         console.log(this); // This ->  Emad's Object
//         console.log(2023 - this.Year);
//     }
// }
// Emad.calcAge()

// const matilda = {
//     Year : 2017,
// }
// matilda.calcAge = Emad.calcAge // method borrowing
// matilda.calcAge()

// const f = Emad.calcAge;
// console.log(f); // function

// f()
 // object literal
const Emad = {
    firstName : "Emad" ,
    Year : 1998,
    calcAge : function(){
        console.log(this); // This ->  Emad's Object
        console.log(2023 - this.Year);
    },
    greet : () => console.log(`Hello ${this.firstName}`) // undefined // its a global scope
}
Emad.greet()
