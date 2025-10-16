// if

// const isUserloggedIn = true
// if (isUserloggedIn) {
    
// }


// if (2 == "2") {
//     console.log("executed");
// }

// if else

// const temperature = 41
// if (temperature === 40) {
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }
// console.log("execute");


// <, >, <=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);   //error will come due to block scope

// const balance = 1000
// if (balance >500) console.log("test"),console.log("test2");    //this is correct but dont use inn this wayy


// if else if

// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==2) { //and->all should be true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { //or->anyone should be true
    console.log("User logged in");
}