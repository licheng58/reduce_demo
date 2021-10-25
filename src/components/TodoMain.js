import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delTodo } from '../redux/action'

class TodoMain extends Component {
  render() {
    // console.log(this.props)
    const { list, dispatchDel } = this.props
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map((item) => {
            return (
              <li className="completed" key={item.key}>
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked />
                  <label>{item.name}</label>
                  <button
                    className="destroy"
                    onClick={() => dispatchDel(item.id)}
                  ></button>
                </div>
                <input
                  className="edit"
                  defaultValue="Create a TodoMVC template"
                />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

const mapActionToProps = (dispatch) => {
  return {
    dispatchDel(id) {
      const action = delTodo(id)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(TodoMain)
