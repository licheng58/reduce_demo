1- 安装 redux  react-redux

2 - src目录创建redux文件夹  

3 - redux 文件夹下创建 store.js  reducer.js action.js

4- store文件夹  
  import { createStore } from 'redux'
  import reducer from './reducer'
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//启动 f12插件
  )

export default store

5- reducer 文件夹

  import { combineReducers } from 'redux'

  // combineReducers会把多个reducer合并成一个根reducer
export default combineReducers({
  todos: todos,
  tab: tab,
  users: users,
})

6- index.js 导入文件
   import { Provider } from 'react-redux'
   import store from './redux/store'
   包裹App组件 
   ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)

7- 使用resux （例如 main.js使用）
   import { connect } from 'react-redux'

   export default connect(mapStateToProps, mapActionToProps)(TodoMain)
   mapStateToProps --- 把state 给 props
   mapActionToProps --把action给 props

