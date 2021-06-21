const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {

  const a = input[0];
  const b = input[1];

if (a > 0 && b > 0) {
  console.log(1)
} else if (a < 0 && b > 0) {
  console.log(2)
} else if (a < 0 && b < 0) {
  console.log(3)
} else {
  console.log(4)
}
process.exit();
});
// 입력 참고사항 : https://tesseractjh.tistory.com/39?category=473836