// Use the "continue" statement

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log('skipping this iteration: ' + i)
    continue
  }
  console.log(i)
}
