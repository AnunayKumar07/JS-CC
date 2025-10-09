const name = "anunay"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anunay-bh')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    anunay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anunay.com/anunay%20verma"
console.log(url.replace('%20','-'));
console.log(url.includes('soni'));

console.log(gameName.split('-'));

