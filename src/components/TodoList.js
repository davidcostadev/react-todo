import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import '~assets/todo.scss'

import { toogleTodo, deleteTodo, changeEdit, clearEditing, saveEdit } from '../store/actions'

import Checkbox from './Checkbox'

// let editing = null


const IfEditing = (props) => {
  if (props.editing) {
    return props.children
  }

  return null
}
const IfNotEditing = (props) => {
  if (!props.editing) {
    return props.children
  }

  return null
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: props.task.name
    }
  }
// = ({ form, task, editing, changeEdit, clearEditing, onSubmit, onCompleted, onDelete }) => {

  handleInputChange(event) {
    console.log(event.target.value)
    this.setState({
      task: event.target.value
    })
  }
  
  render() {
   
    return <li
      className={classNames({
        'list-group-item': true,
        'task-item': true,
        'task-completed': this.props.task.completed,
      })}
      key={this.props.task.id}>

        <IfNotEditing editing={this.props.editing === this.props.task.id}>
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
        </IfNotEditing>
        <IfEditing editing={this.props.editing === this.props.task.id}>
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
        </IfEditing>  
    </li>
  }
}


const TodoNode = ({ todo, editing, clearEditing, saveEdit, changeEdit, onCompletedTodo, onDeleteTodo }) => {
  if (!todo.length) return <li className="list-group-item task-item text-center">Nenhuma tarefa encontrada</li>
  
  return todo.map((task, key) => {
    return <TodoItem
      task={task}
      key={key}
      editing={editing}
      onSubmit={(name) => saveEdit(task.id, name)}
      changeEdit={() => { changeEdit(task.id); console.log('changeEdit') }}
      clearEditing={() => clearEditing(task.id)}
      onCompleted={() => onCompletedTodo(task.id)}
      onDelete={() => onDeleteTodo(task.id)}
    />
  })
}

const TodoList = (payload) => {
  return <ul className="list-group tasks">{TodoNode(payload)}</ul>
}


const mapStateTodos = state => {
  return state
}

const mapStateChange = dispatch => {
  return {
    onCompletedTodo: id => dispatch(toogleTodo(id)),
    onDeleteTodo: id => dispatch(deleteTodo(id)),
    saveEdit: (id, name) => { 
      dispatch(saveEdit(id, name))
      dispatch(clearEditing(id))
    },
    changeEdit: id => dispatch(changeEdit(id)),
    clearEditing: id => dispatch(clearEditing(id)),
  }
}


const TodoListConnect = connect(
  mapStateTodos,
  mapStateChange
) (TodoList)

export default TodoListConnect
