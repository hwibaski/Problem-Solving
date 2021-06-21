var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);


if (a > 89) {
  console.log('A')
} else if (a > 79) {
  console.log('B')
} else if (a > 69) {
  console.log('C')
} else if (a > 59) {
  console.log('D')
} else {
  console.log('F')
}


// if (100 >= a && a >= 90) {
//   console.log('A')
// } else if (89 >= a && a >= 80) {
//   console.log('B')
// } else if (79 >= a && a >= 70) {
//   console.log('C')
// } else if (69 >= a && a >= 60) {
//   console.log('D')
// } else
//   console.log('F')