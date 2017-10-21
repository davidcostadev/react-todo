import React from 'react'
import { connect } from 'react-redux'



// import TodoList from '~components/Todo'
import Errors from '~components/Errors'

import { addTodo } from '../store/actions'


import TodoListNew from './TodoList'
import TodoForm from './TodoForm'
// let AddTodo = ({ dispatch }) => {
//   dispatch(addTodo())
// }

// AddTodo = connect()(AddTodo)

// const tasks = [
//   { id:'1', name: 'Tarefa 1', completed: false },
//   { id:'2', name: 'Tarefa 2', completed: false },
//   { id:'3', name: 'Tarefa 3', completed: true },
//   { id:'4', name: 'Tarefa 4', completed: false },
// ]

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      task: '',
      // tasks,
      btnAddDisabled: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      btnAddDisabled: !event.target.value.length
    })

    this.setState({task: event.target.value})
  }

  addTask(event) {
    event.preventDefault()
    console.log('click on addTask')

    if (this.state.task.trim().length === 0) {
      this.setState({ errors: ['Por favor preencha o nome da tarefa.'] })
      this.refs.input_task.focus()
      return;
    }


    this.state.tasks.push({
      id: (new Date()).getTime(),
      name: this.state.task,
      completed: false,
    })

    this.setState({
      task: '',
      tasks: this.state.tasks
    })
  }

  render() {
    return (
      <div className="container">
        <h1>TODO</h1>

        {/* <Errors errors={this.state.errors} /> */}

        <TodoListNew />        
        {/* <TodoList tasks={this.state.tasks} /> */}
        {/* <br /> */}

        <TodoForm />
      </div>);
  }
}
