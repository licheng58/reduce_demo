import { connect } from 'react-redux'
import { addTodo } from '../redux/action'
import TodoHeader from '../components/TodoHeader'
const mapStateToProps = (state) => ({})

const mapActionToProps = (dispash) => ({
  dispathAddTodo: (value) => dispash(addTodo(value)),
})

export default connect(mapStateToProps, mapActionToProps)(TodoHeader)
