const names = require('./names')
const sayHi = require('./calls')
const data = require('./alternative-flavor')

// console.log(names)
// console.log(sayHi)
// console.log(data)

require('./mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

const os = require("os");
//info about user
const user = os.userInfo();
console.log(user);

//methos returns the system uptime in seconds
console.log(`system Uptime is : ${os.uptime()} seconds `);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
