{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    read.question("Enter the  Number ", function (number) {
        let limit = 0;
        let powerOf = 1;
        while (limit <= number) {
            limit = Math.pow(2, powerOf)
            powerOf++;
            console.log(limit);
        }
        read.close();
    });
}