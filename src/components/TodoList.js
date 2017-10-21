import React from 'react'
import { connect } from 'react-redux'

import '~assets/todo.scss'

import Checkbox from './Checkbox'


const TodoItem = ({ task }) => {

  const classesList = [ 'list-group-item' ]

  if (task.completed) {
    classesList.push('task-completed')
  }

  const TestFunction = () => {
    console.log('TestFunction')
  }

  return <li
    className={classesList.join(' ')}  
    /* className={
      'list-group-item': true,
      'task-completed': task.completed
    } */
    key={task.id}>
    <Checkbox id={`task-${task.id}`} label={task.name} value={task.completed} onChange={TestFunction}/>
  </li>
}

const TodoList = ({ todo }) => {
  const todoNode = todo.map((task, key) => {
    return <TodoItem task={task} key={key} />
  })

  return <ul className="list-group">{todoNode}</ul>
}


const mapStateTodos = state => {
  return state
}


const TodoListConnect = connect(
  mapStateTodos
) (TodoList)

export default TodoListConnect
