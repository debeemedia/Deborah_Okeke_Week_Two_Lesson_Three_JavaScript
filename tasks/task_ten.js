const todos = [
  {
    id: 1,
    task: 'prepare for the day',
    isCompleted: true
  },
  {
    id: 2,
    task: 'self-learning',
    isCompleted: false
  },
  {
    id: 3,
    task: 'go home',
    isCompleted: false
  }
]

for (const todo of todos) {
  const status = `Number ${todo.id}: ${todo.task.toUpperCase()}`
  console.log(status)
  if (todo.isCompleted === true) {
    console.log('done.')
  } else {
    console.log('pending...')
  }
}
