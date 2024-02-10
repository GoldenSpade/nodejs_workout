const { user, newUser, getFilename } = require('./refs/user_module')

console.log('USER:', user)
console.log('NEW USER:', newUser)
console.log('getFileName:', getFilename(__filename))
