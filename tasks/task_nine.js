// Use array methods for iteration

const names = ['IG', 'Toochi', 'Taiwo', 'Clementina']

// forEach

names.forEach(function (name) {
  console.log(name)
  // this will iterate over the array and print each name to the console
})

// map

const uppercaseNames = names.map(function (name) {
  return name.toUpperCase()
})
console.log(uppercaseNames)
// this will print an array of the names in uppercase

// filter

const twoLetterNames = names.filter(function (name) {
  return name.length === 2
})
console.log(twoLetterNames)
// this will print an array of names that have two letters
