let nextTodoId = 0

export const addTodo = name => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      name
    }
  }
}

export const toogleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id
    }
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
}
