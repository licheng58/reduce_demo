import { combineReducers } from 'redux'
import {
  delTodo,
  addTodo,
  checkTodo,
  keyUp2Todo,
  changeStatus,
} from './methods/todos.js'

const data = {
  list: [
    { id: 1, name: '吃饭', done: true },
    { id: 2, name: '睡觉', done: false },
    { id: 3, name: '打豆豆', done: true },
  ],
  statusList: [
    { id: 1, name: 'All', path: '#/' },
    { id: 2, name: 'Active', path: '#/active' },
    { id: 3, name: 'Completed', path: '#/Completed' },
  ],
  currentStatus: 'All',
}

const todos = (state = data.list, action) => {
  switch (action.type) {
    case 'DEL_TODO':
      return delTodo(state, action)
    case 'ADD_TODO':
      return addTodo(state, action)
    case 'CHECK':
      return checkTodo(state, action)
    case 'KEYUP2':
      return keyUp2Todo(state, action)
    default:
      return state
  }
}

const status = (state = data.statusList, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const current = (state = data.currentStatus, action) => {
  // console.log(state)
  switch (action.type) {
    case 'STATUS':
      return changeStatus(state, action)
    default:
      return state
  }
}

const reducer = combineReducers({ todos, status, current })
export default reducer
