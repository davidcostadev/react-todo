import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import '~assets/todo.scss'

import { toogleTodo, deleteTodo } from '../store/actions'

import Checkbox from './Checkbox'


const TodoItem = ({ task, onCompleted, onDelete }) => {

  const classLi = classNames({
    'list-group-item': true,
    'task-item': true,
    'task-completed': task.completed,
  })

  return <li
    className={classLi}
    key={task.id}>
    <Checkbox
      id={`task-${task.id}`}
      label={task.name}
      value={task.completed} onChange={onCompleted} />
 
      <button type="button" className="btn btn-sm btn-outline-danger" onClick={onDelete}>
        <i className="material-icons">delete</i>
      </button>
  </li>
}


const TodoNode = ({ todo, onCompletedTodo, onDeleteTodo }) => {
  if (!todo.length) return <li className="list-group-item task-item text-center">Nenhuma tarefa encontrada</li>
  
  return todo.map((task, key) => {
    return <TodoItem
      task={task}
      key={key}
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
    onDeleteTodo: id => dispatch(deleteTodo(id))
  }
}


const TodoListConnect = connect(
  mapStateTodos,
  mapStateChange
) (TodoList)

export default TodoListConnect
