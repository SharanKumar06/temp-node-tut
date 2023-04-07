// Modules 

// commonjs, every file is module (by default)
// modules - Encapsulated code (only share minimum)

// OS modules =>

const os = require('os') //write module name in the quotes

// now we can access all the methods and properties of the os module

// info about current user

const user = os.userInfo()
console.log(user)

console.log('system uptime is '+ os.uptime()+ " seconds")
console.log(`system uptime is ${(os.uptime())} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS)


module.exports= currentOS