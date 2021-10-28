import React, { Component } from 'react'

import classNames from 'classnames'

class TodoFooter extends Component {
  render() {
    console.log(this.props)
    const { leftCount, statusList, dispatchStatus, cStatus } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount}</strong> item left
        </span>
        <ul className="filters">
          {statusList.map((item) => {
            return (
              <li
                onClick={() => dispatchStatus(item.name)}
                key={item.id}
                className={classNames({
                  aaa: item.name === cStatus,
                })}
              >
                <a href={item.path}>{item.name}</a>
              </li>
            )
          })}
        </ul>
        <button className="clear-completed">
          <div>{cStatus}</div>
        </button>
      </footer>
    )
  }
}

export default TodoFooter
