
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-dom'

import '~plugins/bootstrap'

import '~assets/app.scss'

import store from './store'

import Name from '~layout/default'

import Home from '~pages/Home'



render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
)


