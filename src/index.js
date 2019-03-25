import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'

import {createStore, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import  {Provider} from 'react-redux'

import {rootReducer} from './reducers/root'
import {rootEpic} from './epics'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

