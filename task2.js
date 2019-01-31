const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

var arr = [0];

rl.question('Enter N: ', function (N) {
    var i = 1;
    while (arr[arr.length-1] <= N) {
        if (fib(i) > N)
            break;
        else {
            arr.push(fib(i));
            i++;
        }
    }

    for (var i = 0; i < arr.length; i++)
        rl.output.write(arr[i]+' ');
    rl.close();
});






