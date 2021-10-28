import { connect } from 'react-redux'
import { changeStatus } from '../redux/action'
import TodoFooter from '../components/TodoFooter'

const mapStateToProps = (state) => ({
  leftCount: state.todos.filter((v) => v.done).length,
  statusList: state.status,
  cStatus: state.current,
})

const mapActionToProps = (dispatch) => ({
  dispatchStatus: (status) => dispatch(changeStatus(status)),
})

export default connect(mapStateToProps, mapActionToProps)(TodoFooter)
