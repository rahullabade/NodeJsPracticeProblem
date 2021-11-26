const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(("enter the Number "), function (number1) {
    const number = parseInt(number1);

    // checking if number is negative
    if (number < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }

    // if number is 0
    else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
    }

    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
    }
});