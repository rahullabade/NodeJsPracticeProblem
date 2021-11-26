const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getPrimeFactors(integer) {
    const primeArray = [];
    let isPrime;
  
    // Find divisors starting with 2
    for (let i = 2; i <= integer; i++) {
      if (integer % i !== 0) continue;
  
      // Check if the divisor is a prime number
      for (let j = 2; j <= i / 2; j++) {
        isPrime = i % j !== 0;
      }
  
      if (!isPrime) continue;
      // if the divisor is prime, divide integer with the number and store it in the array
      integer /= i
      primeArray.push(i);
    }
  
    return primeArray;
  }
  rl.question("enter the  number ", function (number) {
   
  console.log(getPrimeFactors(parseInt(number)).join(', '));
  });