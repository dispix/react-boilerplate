import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Routes from './routes'
import configureStore from './store/configureStore'

const appNode = document.getElementById('app')
const store = configureStore()

render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , appNode)
