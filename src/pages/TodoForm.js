import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {addTodo} from '../store/actions.js'


let AddTodo = ({ dispatch }) => {
  let input
  // let ref_value ;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          console.log(input.value)
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <h2>Adicionar Tarefa</h2>
        <div className="form-group">
          <label htmlFor="task-name" className="label-control">Tarefa</label>
          <input
            type="text"
            id="task-name"
            ref={node => { input = node } }
            placeholder="nome da tarefa"
            className="form-control"/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Adicionar Tarefa</button>
        </div>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
