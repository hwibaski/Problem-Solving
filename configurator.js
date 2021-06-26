/**
 * 문제 번호(10000)를 받고,
 * 10000이라는 폴더를 만들고,
 * 그 안에 input.txt를 만들고,
 * 같은 위치에 solution.js를 만들고,
 * solution.js에는 inputCode를 가장 위에 써준다.
 */
const fs = require('fs');
const { exit } = require('process');
const inputCode = "let fs = require('fs');\nlet inputData = fs.readFileSync('/dev/stdin').toString().split('\\n')\n"
const arguments = process.argv.slice(2)

if (arguments.length == 0) {
  console.log("[!] Enter the problem's number after script \n e.g. node configurator.js 10000")
  return
}

const problemNumber = arguments[0]
const dir = './' + problemNumber
configure(problemNumber)

function checkIfPathExist(path) {
  if (fs.existsSync(path)) {
    console.log(`[!] ${path} already exists!`)
    exit(-1)
  }
}

function configure(problemNumber) {
  console.log(`[*] Configuring directory for ${problemNumber}...`)
  checkIfPathExist(problemNumber)
  fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log(`[+] directory is created.`);
  });

  const solutionFileName = `./${problemNumber}/solution.js`
  checkIfPathExist(solutionFileName)
  fs.writeFile(solutionFileName, inputCode, function (err) {
    if (err) throw err;
    console.log(`[+] solution.js is created.`);
  });

  const inputFileName = `./${problemNumber}/input.txt`
  checkIfPathExist(inputFileName)
  fs.writeFile(inputFileName, '', function (err) {
    if (err) throw err;
    console.log(`[+] input.txt is created.`);
  });
}