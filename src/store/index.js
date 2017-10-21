// import './Store'

// import React from 'react'
// import { render } from 'react-dom'
import { createStore } from 'redux'

import todoApp from './reducers'

export default createStore(todoApp)
