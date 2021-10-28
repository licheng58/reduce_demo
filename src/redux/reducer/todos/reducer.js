const defaultState = {
  list: [
    { id: 1, name: '吃饭', done: true },
    { id: 2, name: '睡觉', done: false },
    { id: 3, name: '打豆豆', done: true }
  ]
}

const todos = (state = defaultState.list, action) => {
  switch (action.type) {
    case 'DEL_TODO':
      return state.filter((item) => item.id !== action.id)
    case 'ADD_TODO':
      let obj = {
        id: Date.now(),
        name: action.value,
        done: false
      }

      return (state = [...state, obj])
    case 'CHECK':
      return (state = state.map((v) => {
        if (v.id === action.id) {
          v.done = !v.done
          return v
        } else {
          return v
        }
      }))
    case 'KEYUP2':
      return (state = state.map((v) => {
        if (v.id === action.id) {
          v.name = action.val
          return v
        } else {
          return v
        }
      }))
    default:
      return state
  }
}

module.exports = todos
