
// let markWeight = 78;
// let markHight = 1.69

// let johnHight = 1.95;
// let johnWeight = 92;

// let markMass = markWeight / markHight ** 2 / (markHight * markHight);
// let johnMass = johnWeight / johnHight ** 2 / (johnHight * johnHight);
// // console.log(`Mark's Mass is ${markMass}`);
// // console.log(`John's Mass is ${johnMass}`);


// if(markMass>johnMass){
//     console.log(`Mark's BMI is higher than John's!"`);
//     console.log(`Mark's BMI ${markMass} is higher than John's ${johnMass}!`)
// }else{
//     console.log(`John's BMI is higher than Mark's!`)
//     console.log(`John's BMI ${johnMass} is higher than Mark's ${markMass}!`)
// }

// let tip =15/100;
// if the value between 50 and 300  --> tip 15%
// if the vaue is diffenent tip --> 20%


// let a = 100
// let x = a * (25/100)
// console.log(x);
let bill = 275; 
let tip;
let tipValue = bill >= 50 && bill <=300 ? tip=15/100 : tip=20/100;
let result = bill >= 50 && bill <=300 ? `The bill was ${bill} , the tip was ${bill*tipValue}, and the total value 
${bill+ (bill*tipValue)}` : `The bill was ${bill} , the tip was ${bill*tipValue}, and the total value 
${bill+ (bill*tipValue)}`
console.log(result);

