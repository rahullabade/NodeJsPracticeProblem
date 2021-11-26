const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter the limit of harmonics number ", function (number) {
    let Number_For_Harmonics = parseInt(number);

    // H1 = 1
    let harmonic = 0;

    for (let i = 1; i <= Number_For_Harmonics; i++) {
        harmonic += 1 / i;

        //console.log(harmonic/i);
    }
    console.log(harmonic);
    rl.close();
});