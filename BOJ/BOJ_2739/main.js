const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);

//구구단

for(let i = 1; i < 10; i++) {
   console.log(`${a} * ${i} = ${a*i}`)
}