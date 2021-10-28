import { connect } from 'react-redux'
import { delTodo, checkItem, keyUp2 } from '../redux/action'
import TodoMain from '../components/TodoMain'

const chooseList = (state) => {
  let type = state.current
  if (type === 'All') {
    return state.todos
  } else if (type === 'Active') {
    return state.todos.filter((v) => v.done)
  } else if (type === 'Completed') {
    return state.todos.filter((v) => !v.done)
  }
}

const mapStateToProps = (state) => ({
  list: chooseList(state),
})

const mapActionToProps = (dispatch) => ({
  dispatchDelTodo: (id) => dispatch(delTodo(id)),
  dispatchCheck: (id) => dispatch(checkItem(id)),
  dispatchKeyUp2: (id) => dispatch(keyUp2(id)),
})

export default connect(mapStateToProps, mapActionToProps)(TodoMain)
