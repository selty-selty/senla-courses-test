const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(word) {
     return word === word.split('').reverse().join('') ? true : false;
}

rl.question('Enter word: ', function (word) {
    if (isPalindrome(word))
        rl.output.write('Word is palindrome!');
    else
        rl.output.write('Word is not palindrome!');
    rl.close();
});


