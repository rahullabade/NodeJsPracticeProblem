const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
   output: process.stdout });

   rl.question(("enter the lower "), function (lower) {
       rl.question("enter the upper", function(upper) {
           
  
  let lowerNumber = parseInt(lower);
  let higherNumber = parseInt(upper);
   
   console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
   
   // looping from() lowerNumber to higherNumber
   for (let i = lowerNumber; i <= higherNumber; i++) {
       let flag = 0;
   
       // looping through 2 to user input number
       for (let j = 2; j < i; j++) {
           if (i % j == 0) {
               flag = 1;
               break;
           }
       }
   
       // if number greater than 1 and not divisible by other numbers
       if (i > 1 && flag == 0) {
           console.log(i);
       }
   }
   });
});