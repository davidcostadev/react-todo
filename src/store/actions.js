import axios from 'axios'
import { 
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CHANGE_EDITING,
  CLEAR_EDITING,
  SAVE_EDITING,
  CHANGE_TASK_NAME,
} from './types'

let nextTodoId = 0

export const addTodo = name => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      name
    }
  }
}

export const toogleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

export const changeEdit = id => {
  return {
    type: CHANGE_EDITING,
    payload: {
      id
    }
  }
}

export const clearEditing = id => {
  return {
    type: CLEAR_EDITING
  }
}
export const saveEdit = (id, name) => {
  return {
    type: SAVE_EDITING,
    payload: {
      id,
      name
    }
  }
}
export const editTaskName = (name) => {
  return {
    type: CHANGE_TASK_NAME,
    payload: {
      id: 0,
      name
    }
  }
}

export function requestData(json) {
  return {
    type: REQUEST_DATA
  }
}
export function receiveData(json) {
  return {
    type: RECEIVE_DATA,
    payload: json
  }
}
export function receiveError(json) {
  return {
    type: RECEIVE_ERROR,
    payload: json
  }
}


export function fetchData(url) {
  return (dispatch) => {
    dispatch(requestData())

    return axios(url)
      .then(response => {
        console.log(response)
        dispatch(receiveData(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(receiveError(error.data))
      })
  }
}
