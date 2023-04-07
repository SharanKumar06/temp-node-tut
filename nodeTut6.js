const fileSystem = require('fs');

// sync- blocking 
// async= non-blocking

const {readFileSync,writeFileSync}= require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'}
)
const res= readFileSync('./content/result-sync.txt','utf8')
writeFileSync('./content/first.txt', `${first} ${'why tf bro'}`,{flag:'a'})
writeFileSync('./content/second.txt', `${first} ${'why tf bro'}, here is the result: ${res}`,{flag:'a'})


writeFileSync('./content/first.txt', `${'loli'}`, {flag:'a'})
writeFileSync('./content/second.txt',`${'loli'}`, {flag:'a'})
writeFileSync('./content/result-sync.txt',`${'loli'}`, {flag:'a'})
