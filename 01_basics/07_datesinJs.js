// Dates

let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());


let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDateTime = new Date(2023, 0, 23, 5, 2)
// let myCreatedDateTime = new Date("2023-01-15")
let myCreatedDateTime = new Date("01-15-2023")
//console.log(myCreatedDateTime.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDateTime.getTime());
// console.log(Math.floor(Date.now()/1000));  //to get it in seconds


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

let huhu = newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(huhu);
