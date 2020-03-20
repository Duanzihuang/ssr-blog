import React from 'react'
import './App.css'

// 导入路由相关
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// 导入子组件
import AuthRoute from './components/AuthRoute'

// 导入页面
import Login from './views/Login'
import Layout from './views/Layout'
import NotFound from './views/NotFound'

function App() {
  return (
    <div id="app">
      <Router>
        <Switch>
          <AuthRoute path="/layout" exact component={Layout} />
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/layout" />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
