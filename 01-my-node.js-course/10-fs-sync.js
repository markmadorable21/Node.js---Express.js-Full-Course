const fs = require('fs');
fs.readFileSync;
console.log('start');

//destructuring
//synchronous (wait for the first line to execute, blocking)
const { readFileSync, writeFileSync } = require('fs');
console.log('starting task');

const first = readFileSync('./content/first.txt', 'utf8');
console.log('starting first task');
const second = readFileSync('./content/second.txt', 'utf8');
console.log('starting second task');
console.log(first, second);

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' },
);

console.log('done task');
