// Event Loop
// executing multiple lines by executing short-time-to-execute (immediate) statements and putting last (offload) the long-to-execute tasks to cater parallel execution and avoid long waiting

// example event loop for asynchronous callback readFile()
const { readFile, writeFile } = require('fs');

console.log('started a first task');
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});
console.log('starting next task');
