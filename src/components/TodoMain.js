import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'
import { delTodo, checkItem, keyUp2 } from '../redux/action'
import classNames from 'classnames'

class TodoMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editVal: '',
    }

    // this.toggleRef = React.createRef()
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
    // const liRef = useRef()
    // const liRefList = useRef([])
    // function getRef(dom) {
    //   liRefList.current.push(dom)
    // }
    // console.log(list)
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

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    list: state,
  }
}

const mapActionToProps = (dispatch) => {
  return {
    dispatchDelTodo(id) {
      dispatch(delTodo(id))
    },

    dispatchCheck(id) {
      dispatch(checkItem(id))
    },

    dispatchKeyUp2(val, id) {
      // console.log(this.state.editVal)
      dispatch(keyUp2(val, id))
    },
  }
}

export default connect(mapStateToProps, mapActionToProps)(TodoMain)
