const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter the  number ", function (number) {
    let Number_For_Prime = parseInt(number);

    let isPrime = true;

    // check if number is equal to 1
    if (Number_For_Prime === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    // check if number is greater than 1
    else if (Number_For_Prime > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < Number_For_Prime; i++) {
            if (Number_For_Prime % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${Number_For_Prime} is a prime number`);
        } else {
            console.log(`${Number_For_Prime} is a not prime number`);
        }
    }

    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
    rl.close();
});