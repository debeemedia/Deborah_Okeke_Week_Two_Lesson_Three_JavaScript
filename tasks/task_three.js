// Use a "for...in" loop to iterate over an object

const me = {
  name: 'deborah',
  age: 70,
  city: 'awka'
}
for (const key in me) {
  console.log(key + ': ' + me[key])
}
