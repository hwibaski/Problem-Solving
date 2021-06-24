let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let h = parseInt(input[0]);
let m = parseInt(input[1]);

m = m - 45;

if(m < 0) {
  m += 60;
  h--;

  if(h === -1) {
    h = 23;
  }
}

console.log(h, m)

// 두 가지의 경우의 수를 생각.
// 1. M에서 45를 뺀 값이 음수일 경우
// 2. H값이 음수일 경우

// 먼저 M에서 45를 뺀 값을 구하고

// 그 값이 0보다 작을 경우 45분 뺀값 + 60이 M값이 되고 H값을 1 빼 준다.

// 이때 만약에 1을 뺀 H값이 -1일 경우 23이 된다. (0에서 1을 뺀 시간이므로)