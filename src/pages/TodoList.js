import React from 'react'
import { connect } from 'react-redux'



import TodoList from '~components/Todo'
// import Errors from '~components/Errors'

// import { addTodo } from '../store/actions'

 
const mapStateTodos = state => {
  return state
  // return {
  //   todos: getVisibleTodos(state.todos, state.visibilityFilter)
  // }
}


const TodoListConnect = connect(
  mapStateTodos
) (TodoList)

export default TodoListConnect
