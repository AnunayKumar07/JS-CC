// Immediately Invoked Function Expression(IIFE) ->jo funcn immediately execute ho jae or global scope k variable ya pollution ko hatane k lie use hota h


// function chai(){
//     console.log(`DB CONNECTED`); 
// }
// chai()


// IIFE below
(function chai(){     //named iife
    console.log(`DB CONNECTED`); 
})();

// using in arrow funcn
(() => {
    console.log(`DB CONNECTED TWO`);
})();



((name) => {        //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('anunay');


// do iife ek sath likh rhe hoto pahle k last me semicolon lagana parega warna error aaega