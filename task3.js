const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arr = [];

function asNumbers(a, b) {
    return a - b;
}

rl.on('line', function (input) {
    arr.push(input);
    arr.sort(asNumbers);
    arr.reverse();
    for (var i = 0; i < arr.length; i++)
        rl.output.write(arr[i]+' ');
    console.log();
});