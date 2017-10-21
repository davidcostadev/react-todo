
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
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        
        return todo
      })
    default:
      return state  
  }
}





const reducers = combineReducers({
  todo
})

export default reducers
