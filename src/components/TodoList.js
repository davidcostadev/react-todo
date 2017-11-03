import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { toogleTodo, deleteTodo, changeEdit, clearEditing, saveEdit, editTaskName, fetchData } from '../store/actions'

// Components
import TodoItem from './TodoItem'


const TodoNode = (props) => {
  if (!props.todo.length) return <li className="list-group-item task-item text-center">Nenhuma tarefa encontrada</li>
  
  return props.todo.map((task, key) => {
    return <TodoItem
      task={task}
      key={key}
      editing={props.editing}
      formEdit={props.formEdit}
      onSubmit={(name) => props.saveEdit(task.id, name)}
      formTaskEditName={(name) => props.formTaskEditName(name)}
      changeEdit={() => props.changeEdit(task)}
      clearEditing={() => props.clearEditing(task.id)}
      onCompleted={() => props.onCompletedTodo(task.id)}
      onDelete={() => props.onDeleteTodo(task.id)}
    />
  })
}

const TodoList = (payload) => {
  payload.fetchData('https://api.myjson.com/bins/1bsn17')
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
    changeEdit: ({ id, name }) => {
      dispatch(changeEdit(id))
      dispatch(editTaskName(name))
    },
    clearEditing: id => dispatch(clearEditing(id)),
    formTaskEditName: name => dispatch(editTaskName(name)),
    fetchData: url => dispatch(fetchData(url))
  }
}

const TodoListConnect = connect(
  mapStateTodos,
  mapStateChange
) (TodoList)

export default TodoListConnect
