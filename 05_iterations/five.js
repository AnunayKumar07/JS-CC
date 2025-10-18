// for each loop

const coding = ["js", "ruby", "cpp", "java", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (item) => {    //arrow function k trh se
//     console.log(item);
// } )


// function printMe(item){   //another way jaha function pahle hi declare kr die and (line 18) baad ,e bs uska refrence lie
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {     //jo bhi item ya value prinnt kr rhe uske alawa index uska and pura array v kr sakte h
//     console.log(item, index, arr);
// } )


// multiple objects in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    // console.log(item.languageFileName);
} )