export const delTodo = (state, action) => {
  return state.filter((item) => item.id !== action.id)
}

export const addTodo = (state, action) => {
  let obj = {
    id: Date.now(),
    name: action.value,
    done: false,
  }

  return (state = [...state, obj])
}

export const checkTodo = (state, action) => {
  return (state = state.map((v) => {
    if (v.id === action.id) {
      v.done = !v.done
      return v
    } else {
      return v
    }
  }))
}

export const keyUp2Todo = (state, action) => {
  return (state = state.map((v) => {
    if (v.id === action.id) {
      v.name = action.val
      return v
    } else {
      return v
    }
  }))
}

export const changeStatus = (state, action) => {
  return (state = action.status)
}
