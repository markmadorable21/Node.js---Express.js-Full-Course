console.log(__dirname);
console.log(__filename);

//accessing the exported variables from 4-names.js file
const names = require('./4-names');
//accessing the exported method from 5-utils.js file
const sayHi = require('./5-utils');
console.log(names);

//Modules
sayHi('susan');
sayHi(names.peter);
sayHi(names.john);

//calling alternative exporting for variables
const data = require('./6-alternative-export');
console.log(data);

//calling alternative exporting of methods
//this executes the method defined in 7-mind-grenade when running node app.js
require('./7-mind-grenade');
