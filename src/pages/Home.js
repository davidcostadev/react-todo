import React from 'react';

import TodoList from '~components/Todo'


const tasks = [
  { id:'1', name: 'Tarefa 1' },
  { id:'2', name: 'Tarefa 2' },
  { id:'3', name: 'Tarefa 3' },
  { id:'4', name: 'Tarefa 4' },
]

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      tasks
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({task: event.target.value})
  }

  addTask(event) {
    event.preventDefault()
    console.log('click on addTask')

    this.state.tasks.push({
      id: (new Date()).getTime(),
      name: this.state.task
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

        <TodoList tasks={this.state.tasks} />
        <br />

        <form className="form" onSubmit={this.addTask}>

          <div className="form-group">
            <label htmlFor="task-name" className="label-control">Tarefa</label>
            <input
              type="text"
              id="task-name"
              value={this.state.task}
              onChange={this.handleChange}
              className="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">Adicionar Tarefa</button>
          </div>
        </form>
      </div>);
  }
}
