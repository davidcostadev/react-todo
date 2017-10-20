
import { createStore } from 'redux'


// Actions
const incrementar = { type: 'INCREMENTRA' }
const decrementar = { type: 'DECREMENTAR' }


// Reducer 
const reducer = (state = { contador: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENTRA': 
      return { contador: state.contador + 1}  
    case 'DECREMENTAR': 
      return { contador: state.contador - 1 }  
    default:
      return state
  }
}

// Store
const store = createStore(reducer)

// Logger
function log() {
  console.log('Contador: ', store.getState().contador)
}


log() // Contador:  0

store.dispatch(incrementar)

log() // Contador:  1

store.dispatch(decrementar)

log() // Contador:  0
