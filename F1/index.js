'use strict';

const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase()
}
const upperFirstWord = function(str){
    const [first, ...others] =str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

// hHigher order Function
const transformer = function(str , fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed string : ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
transformer('JavaScript is the best' , upperFirstWord)
transformer('JavaScript is the best' , oneWord)

/*
Original String: JavaScript is the best
index.js:14 Transformed string : JAVASCRIPT is the best
index.js:16 Transformed by: upperFirstWord
index.js:13 Original String: JavaScript is the best
index.js:14 Transformed string : javascriptisthebest
index.js:16 Transformed by: oneWord
*/

// function return a function

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet("Hey")
greeterHey("Emad")
greeterHey("Ahmed")

greet("Hello")("Osama")

const greetArr = greeting => name => console.log(`${greeting} , ${name}`);
greetArr("Hi")("Mohameed")

/*
Hey Emad
index.js:34 Hey Ahmed
index.js:34 Hello Osama
index.js:43 Hi , Mohameed
*/

const lufthansa = {
    airline : "Lufthansa",
    iataCode: "LH",
    bookings : [],
    book(flightNum , name){
        console.log(`${name} booked a seat on ${this.airline} flight Number ${this.iataCode}${flightNum}`);
        this.bookings.push({flight : `${this.iataCode}${flightNum}` , name})
    }
}
lufthansa.book(237,"Emad Idris")
lufthansa.book(635,"John Smith")
console.log(lufthansa);
const eurowings = {
    name : "Eurowings",
    iataCode : "EW",
    bookings: [],
    
}
// call method
const book = lufthansa.book
book.call(eurowings , 23 , "Sarah")
console.log(eurowings);

book.call(lufthansa,198,"Mary Cooper")
console.log(lufthansa);

// apply method
const flightData = [368 , "George Cooper"]
book.apply(lufthansa,flightData)
// or 
book.call(lufthansa,...flightData)
console.log(lufthansa);

// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa)
bookEW(512 ,"Steven Willams");
console.log(eurowings);
console.log(lufthansa);
