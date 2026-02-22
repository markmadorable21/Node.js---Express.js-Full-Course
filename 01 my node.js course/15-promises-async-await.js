// const { readFile } = require('fs');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// // getText('./content/first.text')
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));

// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     console.log(`File content: ${first}`);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(start);
// };

// start();

// simplify

// const { readFile } = require('fs');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     console.log('2. Inside getText function - starting file read');
//     readFile(path, 'utf8', (err, data) => {
//       console.log('4. File read callback executed');
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//     console.log('3. getText function - file read initiated, continuing');
//   });
// };

// const start = async () => {
//   console.log('1. Inside start function - before await');

//   try {
//     const first = await getText('./content/first.txt');
//     // below await line above will be executed since it waits to get the result then assigning it to first variable
//     console.log('5. After await - got result:', first);
//   } catch (error) {
//     console.log('5. After await - got error:', error);
//   }

//   console.log('6. End of start function');
// };

// console.log('0. Before calling start');
// start();
// console.log('7. After calling start - script continues!');

// ✅ STANDARD WAY - Using built-in promises
const { readFile } = require('fs/promises'); // or require('fs').promises

const start = async () => {
  console.log('1. Inside start function');

  try {
    const first = await readFile('./content/first.txt', 'utf8');
    console.log('File content:', first);
  } catch (error) {
    console.log('Error:', error);
  }

  console.log('2. End of start function');
};

console.log('0. Before calling start');
start();
console.log('3. After calling start');
