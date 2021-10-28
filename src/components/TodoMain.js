import React, { Component } from 'react'
import classNames from 'classnames'

class TodoMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editVal: '',
    }
  }

  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{this.renderItems()}</ul>
      </section>
    )
  }

  renderItems() {
    const { list, dispatchDelTodo, dispatchCheck } = this.props

    if (list.length === 0) {
      return (
        <div
          style={{ height: '100px', textAlign: 'center', lineHeight: '100px' }}
        >
          没有更多数据
        </div>
      )
    } else {
      return list.map((item, index) => {
        return (
          <li
            className={classNames({ completed: item.done })}
            key={item.id}
            onDoubleClick={this.handleDoubelClick.bind(this, index, item.name)}
          >
            <div className="view" id={'view' + index}>
              {/* checkbox选择框 */}
              <input
                className="toggle"
                type="checkbox"
                checked={item.done}
                onChange={() => dispatchCheck(item.id)}
              />
              <label>{item.name}</label>
              {/* 删除按钮 */}
              <button
                className="destroy"
                onClick={() => dispatchDelTodo(item.id)}
              ></button>
            </div>
            {/* 修改 */}
            <input
              id={'edit' + index}
              className="edit"
              value={this.state.editVal}
              onChange={this.handleEdit}
              onKeyUp={(e) => this.handleKeyUp2(e, item.id, index)}
            />
          </li>
        )
      })
    }
  }

  // 修改
  handleEdit = (e) => {
    this.setState({
      editVal: e.target.value,
    })
  }

  // 修改回车
  handleKeyUp2 = (e, id, index) => {
    const { dispatchKeyUp2 } = this.props
    if (e.keyCode === 13) {
      dispatchKeyUp2(this.state.editVal, id)
      const aa = document.getElementById(`view${index}`)
      const bb = document.getElementById(`edit${index}`)
      aa.style.display = 'block'
      bb.style.display = 'none'
    }
  }

  // 双击
  handleDoubelClick = (index, name) => {
    this.setState({
      editVal: name,
    })
    const aa = document.getElementById(`view${index}`)
    const bb = document.getElementById(`edit${index}`)
    aa.style.display = 'none'
    bb.style.display = 'block'
    bb.focus()
  }
}

export default TodoMain
