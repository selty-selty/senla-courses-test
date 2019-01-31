const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var arr = [];

function check(arr) {
    var cnt1 = 0;
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == 1 || arr[i] == 'true')
            cnt1++;
    return cnt1 == 2 ? true : false;
}

console.log("Enter 4 boolean values in any format: ");

rl.on('line', function (input) {
    arr.push(input);
    if (arr.length >= 4) {
        if (check(arr))
            console.log('True');
        rl.close();
        process.exit(0);
    }
});




