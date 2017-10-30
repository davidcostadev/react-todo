
import { combineReducers } from 'redux'

export const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      const newState = Object.assign([], state)
      const indexOfState = state.findIndex(todo => todo.id === action.id)

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
