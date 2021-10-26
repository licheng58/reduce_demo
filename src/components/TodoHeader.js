import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action'
class TodoHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos111</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
      </header>
    )
  }

  // 绑定input
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.dispathAddTodo(this.state.value)
      this.setState({
        value: '',
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapActionToProps = (dispash) => {
  return {
    dispathAddTodo(value) {
      dispash(addTodo(value))
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(TodoHeader)
