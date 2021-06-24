const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let result = 0

for(let i = 0; i < a+1; i++) {
  result = result + i
}
console.log(result)