// OS Module
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

//OS uptime
console.log(`OS Uptime (sec): ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);


