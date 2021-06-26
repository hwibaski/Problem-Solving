let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = '';
for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    const A = Number(numbers[0])
    const B = Number(numbers[1])
    answer += (A+B) + '\n';
}
console.log(answer);
