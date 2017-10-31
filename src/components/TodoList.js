import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { toogleTodo, deleteTodo, changeEdit, clearEditing, saveEdit } from '../store/actions'

// Components
import TodoItem from './TodoItem'


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


// Maps

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
