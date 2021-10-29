import { combineReducers } from 'redux'

import todos from './reducer/todos/reducer'
import status from './reducer/status/reducer'
import current from './reducer/current/reducer'

// console.log(status)

const reducer = combineReducers({ todos, status, current })
export default reducer
