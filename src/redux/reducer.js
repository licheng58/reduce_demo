// import { combineReducers } from 'redux'

const list = [
  { id: 1, name: '吃饭', done: true },
  { id: 2, name: '睡觉', done: true },
  { id: 3, name: '打豆豆', done: true }
]

export default function todos(state = list, action) {
  if (action.type === 'DEL_TODO') {
    return state.filter((item) => item.id !== action.id)
  }
  return state
}
