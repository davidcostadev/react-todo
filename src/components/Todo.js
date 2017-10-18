
import React from 'react'

import '~assets/todo.scss'

const TodoItem = ({ task }) => {

  const classesList = [ 'list-group-item' ]

  if (task.completed) {
    classesList.push('task-completed')
  }

  return <li
    className={classesList.join(' ')}  
    /* className={
      'list-group-item': true,
      'task-completed': task.completed
    } */
    key={task.id}>{task.name}</li>
}

const TodoList = ({ tasks }) => {
  const todoNode = tasks.map((task, key) => {
    return <TodoItem task={task} key={key} />
  })

  return <ul className="list-group">{todoNode}</ul>
}


export default class Todo extends React.Component {
  render() {
    return <TodoList tasks={this.props.tasks} />
  }
}
