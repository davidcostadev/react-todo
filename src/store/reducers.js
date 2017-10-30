
import { combineReducers } from 'redux'

export const todo = (state = [], { type, payload }) => {
  let newState;

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
      newState = Object.assign([], state)
      const indexOfState = state.findIndex(todo => todo.id === payload.id)

      newState.splice(indexOfState, 1)  

      return newState
    case 'SAVE_EDITING':
      console.log('SAVE_EDITING')  
        return state.map(todo =>
        (todo.id === payload.id) 
          ? {...todo, name: payload.name}
          : todo
        )

    default:
      return state  
  }
}

export const editing = (state = null, { type, payload }) => {
  switch (type) {
    case 'CHANGE_EDITING':
      console.log('CHANGE_EDITING')  
      return payload.id
    case 'CLEAR_EDITING':
      return null
    default:
      return state  
  }
}





const reducers = combineReducers({
  todo,
  editing
})

export default reducers
