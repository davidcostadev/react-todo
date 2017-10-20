import { combineReducers } from 'redux'
import todo from './todos'


const todoApp = combineReducers({
  todos
})

export default todoApp
