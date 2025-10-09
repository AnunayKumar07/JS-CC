// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const name = "anunay"
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

// console.log(id === anotherID);

const bigNumber = 324332432423442342334232n



// Non-Primitive or reference type
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Anunay",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World!");
}



// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);



// type of undefined is undefined
// type of null is object
// type of boolean is boolean
// type of number is number
// type of string is string
// type of symbol is symbol
// type of bigint is bigint

// type of array is object
// type of object is object
// type of function is function i.e object function





// ++++++++++Stack & heap memory+++++++++++

// Stack(Primitive), Heap(Non-Primitive)

// statck me copy milta h & heap me reference milta h means ki jo v change hoga wo actual value me hoga

let myYoutubeName = "anunayvermadotcom"

let anotherName = myYoutubeName
anotherName = "Anunay's shayari"

console.log(myYoutubeName);
console.log(anotherName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "anu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
