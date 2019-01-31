const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function deleteNumbers(text) {
    var arr = [];
    arr = text.split('');
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= '0' && arr[i] <= '9') {
            arr.splice(i, 1);
            i--;
        }
    }
    text = arr.join('');
    return text;
}

rl.question('Enter any text: ', function (text) {
    console.log(deleteNumbers(text));
    rl.close();
});


