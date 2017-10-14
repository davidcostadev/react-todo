import React from 'react';

import TodoList from '~components/Todo'


const tasks = [
  { id:'1', name: 'Tarefa 1' },
  { id:'2', name: 'Tarefa 2' },
  { id:'3', name: 'Tarefa 3' },
  { id:'4', name: 'Tarefa 4' },
]

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>TODO</h1>

        <TodoList tasks={tasks} />

        <button className="btn btn-success">Adicionar</button>
      </div>);
  }
}
