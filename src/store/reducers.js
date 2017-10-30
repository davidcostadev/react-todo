
import { combineReducers } from 'redux'

export const todo = (state = [], { type, payload}) => {
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === payload.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      const newState = Object.assign([], state)
      const indexOfState = state.findIndex(todo => todo.id === payload.id)

      newState.splice(indexOfState, 1)  

      return newState
      
    default:
      return state  
  }
}





const reducers = combineReducers({
  todo
})

export default reducers
