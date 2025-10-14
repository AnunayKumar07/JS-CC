function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("Y");   
}
// sayMyName()


function addTwoNumbers(num1, num2){   //num1 and num2 are parameters
    console.log(num1 + num2);
}
// addTwoNumbers(3,4)   //3 and 4 are arguments


function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
const results = addTwoNumbers(3,4)
// console.log("Result:", results);


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}
const result = addTwoNumbers(3,4)
// console.log("Result:", result);



function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anunay"));
// console.log(loginUserMessage());

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anunay"));
// console.log(loginUserMessage());

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anunay"));
// console.log(loginUserMessage());

function loginUserMessage(username = "sam"){   //sam is default value so it will never get inside if condn
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anunay"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){   //...is rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Anunay",
    prices: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}
// handleObject(user)

// handleObject({
//     username: "Sam",
//     prices: 399
// })


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 700, 300, 200]));
