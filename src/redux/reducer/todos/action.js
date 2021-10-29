export const delTodo = (id) => {
  return {
    type: 'DEL_TODO',
    id,
  }
}

export const addTodo = (value) => {
  // console.log(value)
  return {
    type: 'ADD_TODO',
    value,
  }
}

export const checkItem = (id) => {
  return {
    type: 'CHECK',
    id,
  }
}

export const keyUp2 = (val, id) => {
  return {
    type: 'KEYUP2',
    val,
    id,
  }
}
