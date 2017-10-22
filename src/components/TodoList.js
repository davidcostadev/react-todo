import React from 'react'
import { connect } from 'react-redux'

import '~assets/todo.scss'

import { toogleTodo } from '../store/actions'

import Checkbox from './Checkbox'


const TodoItem = ({ task, onCompleted }) => {

  const classesList = [ 'list-group-item' ]

  if (task.completed) {
    classesList.push('task-completed')
  }

  // console.log(dispatch)

  const TestFunction = (e) => {
    console.log('TestFunction', e)
  }

  return <li
    className={classesList.join(' ')}  
    /* className={
      'list-group-item': true,
      'task-completed': task.completed
    } */
    key={task.id}>
    <Checkbox
      id={`task-${task.id}`}
      label={task.name}
      value={task.completed} onChange={onCompleted} />
  </li>
}

const TodoList = ({ todo, onCompletedTodo }) => {
  // console.log(dispatch)
  const todoNode = todo.map((task, key) => {
    return <TodoItem task={task} key={key} onCompleted={() => onCompletedTodo(task.id)}/>
  })

  return <ul className="list-group">{todoNode}</ul>
}


const mapStateTodos = state => {
  return state
}

const mapStateOnCompleted = dispatch => {
  return {
    onCompletedTodo: id => {
      dispatch(toogleTodo(id))
    }
  }
}


const TodoListConnect = connect(
  mapStateTodos,
  mapStateOnCompleted
) (TodoList)

export default TodoListConnect
