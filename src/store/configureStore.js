import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from '../reducers'

/**
 *  Configure the Redux store
 *  @method  configureStore
 *  @param   {Object}        [preloadedState]  The initial state of the app
 *  @return  {Object}                          The Redux store
 */
const configureStore = preloadedState => {
  const enhancer = compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const newtRootReducer = require('../reducers').default
      store.replaceReducer(newtRootReducer)
    })
  }

  return store
}

export default configureStore
