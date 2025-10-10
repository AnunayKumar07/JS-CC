//singleton => constructor se banega or literals k trh declare krne se nahi banega
// Object.create => ye constructor method h object declare krne ka


// object literals below

const mySym = Symbol("Key1")   //symbol declare

const JsUser = {
    name: "Anunay",
    "full Name": "Anunay Verma",
    [mySym]: "myKey1",  //this is syntax how symbol can be used
    age: 20,
    location: "Kolkata",
    email: "anunay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full Name"]); //this is only way to represent full name bcz in object we have writtten it in double qotes

// console.log(JsUser[mySym]);  //this is how symbol can be printed


JsUser.email = "anunay@chatgpt.com"  //this is how we can change the value
// console.log(JsUser.email);

// Object.freeze(JsUser) //  this is way to freeze the value
JsUser.email = "anunay@gemini.com"
// console.log(JsUser.email);
// console.log(JsUser);

// we need to cmnt or remove line 31 bcz duento that nothing can be done in jsuser

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} this side`); //same object ko reference krne k lie this use krte h
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
