const user = {
  name: 'John',
  age: 25
}

const newUser = {
  name: 'Kate',
  age: 23
}

const getFilename = filename => filename.split('\\').reverse()[0]

module.exports = {
  user,
  getFilename,
  newUser
}
