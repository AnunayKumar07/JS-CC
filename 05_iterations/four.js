// for in loops for objects

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "rubby",
    swift: 'swift by apple',
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in loop for array

const programming = ["js", "cpp", "rb", "py", "java"]
for (const key in programming) {
    // console.log(key);  //it will give key only

    console.log(programming[key]); //it will give the value
}


//  for in loop for Maps->not iterable means no output

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")
// for (const key in map) {
//     console.log(key);
// }


// arrays k lie for of loop use and objects k lie for in loop