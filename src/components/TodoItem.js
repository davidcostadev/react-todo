import React, { Component } from 'react'
import classNames from 'classnames'

import '~assets/todo.scss'

// Components
import Checkbox from './Checkbox'


class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: props.task.name
    }
  }

  handleInputChange(event) {
    this.setState({
      task: event.target.value
    })
  }
  
  formEditting() {
    return (
      <li
      className={classNames({
        'list-group-item': true,
        'task-item': true,
        'task-completed': this.props.task.completed,
      })}
      key={this.props.task.id}>
        <input
          type="text"
          value={this.state.task}
          onChange={e => this.handleInputChange(e)} />
        <button type="button" className="btn btn-save btn-sm btn-outline-success" onClick={() => this.props.onSubmit(this.state.task)}>
          <i className="material-icons">save</i>
        </button>
        <button type="button" className="btn btn-cancel btn-sm btn-outline-danger" onClick={this.props.clearEditing}>
          <i className="material-icons">clear</i>
        </button>
      </li>
    )  
  }

  taskDefault() {
    return (
      <li
      className={classNames({
        'list-group-item': true,
        'task-item': true,
        'task-completed': this.props.task.completed,
      })}
      key={this.props.task.id}>
        <Checkbox
          id={`task-${this.props.task.id}`}
          label={this.props.task.name}
          className="task-item-content"
          value={this.props.task.completed} onChange={this.props.onCompleted} />
          <button type="button" className="btn btn-edit btn-sm btn-outline-info" onClick={this.props.changeEdit}>
            <i className="material-icons">edit</i>
          </button>
          <button type="button" className="btn btn-delete btn-sm btn-outline-danger" onClick={this.props.onDelete}>
            <i className="material-icons">delete</i>
        </button>
      </li>
    )
  }

  render() {
    if (this.props.editing === this.props.task.id) {
      return this.formEditting()
    }

    return this.taskDefault()
  }
}


export default TodoItem
