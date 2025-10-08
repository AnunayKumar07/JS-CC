const accountId = 144553
let accountEmail = "anunay@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;
// accountId = 5  //not allowed

accountEmail = "ab@va.com"
accountPassword = "717171"
accountCity = "Darbhanga"

console.log(accountId);

/*
Prefer not to use var bacause of issue in
block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])