import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { addTodo } from '../store/actions'


let AddTodo = ({ dispatch }) => {
  let input
  // let ref_value ;

  return (
    <div className="box">
      <div className="box-content">
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <h2 className="sub-title">Adicionar Tarefa</h2>
          <div className="form-group">
            <input
              type="text"
              id="task-name"
              ref={node => { input = node } }
              placeholder="Nome da Tarefa"
              className="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">Adicionar Tarefa</button>
          </div>
        </form>
      </div>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
