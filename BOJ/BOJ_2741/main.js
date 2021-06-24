let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let answer = "";

for (let i = 1; i <= num; i++) {
  answer = answer + (i + "\n");
}
console.log(answer);
