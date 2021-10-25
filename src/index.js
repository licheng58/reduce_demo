import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/base.css'
import './styles/index.css'

import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
