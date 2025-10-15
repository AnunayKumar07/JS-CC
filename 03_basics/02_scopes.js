// var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20
    // var c = 30

    // console.log("Inner:",a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++++++++++++++++++++++++++++

function one(){
    const username = "anunay"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}
// one()

// ++++++++++++++++++++++++++++++++++++++++++++

if (true) {
    const username = "anunay"

    if (username === "anunay") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);


// +++++++++interesting+++++++++

addone(5)
console.log(addone(5));

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}