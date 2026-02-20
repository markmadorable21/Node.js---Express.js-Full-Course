const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('bayot jomar');

// add nodemon as dev dependency by typing in the terminal:
//   npm i nodemon -D

// to run without typing node <file,js>, type in (after setting dev in scripts to nodemon app.js and start to node app.js):
//     npm run dev
// to exit:
//     Ctrl+C
