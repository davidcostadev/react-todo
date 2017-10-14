
import React from 'react'

const TodoItem = ({ task }) => {
  return <li className="list-group-item" key={task.id} >{task.name}</li>
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
