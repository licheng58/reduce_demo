import React, { Component } from 'react'
import TodoHeader from './contaniers/TodoHeader'
import TodoMain from './contaniers/TodoMain'
import TodoFooter from './contaniers/TodoFooter'
export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}
