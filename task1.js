const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prime(N) {
    for(var i = 2; i < N; i++)
        if (N % i == 0)
            return false;
    return true;
}

rl.question('Enter N: ', function (N) {
    for (var i = 2; i <= N; i++)
        if (prime(i))
            rl.output.write(i+" ");
    rl.close();
});