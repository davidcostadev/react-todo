let nextTodoId = 0

export const addTodo = name => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    name
  }
}

export const toogleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}