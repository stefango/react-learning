// react
import React from 'react';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// 第三方库
// import _ from 'lodash'
import { Button } from "antd";
// 自定义组件
// import SimpleChild from './components/SimpleChild';
import ContextChild from './components/ContextChild';
import Parent from './components/Parent';
import Home from './components/Home';
import User from './components/User';
import HookDemo from './components/HookDemo';
import ReduxDemo from './components/ReduxDemo';
//媒体资源
import MyLogo from './assets/ZX.png'

export const ThemeContext = React.createContext('light');

function App(props) {

  // 监听路由
  props.history.listen((route) => {
    console.log('监听', route);
  })

  return (
    <div className="App">
      <ReduxDemo />
      <HookDemo />
      <hr />
      <h2>路由</h2>
      {/* <Link to="/home/66">To home/66</Link>
      |
      <Link to="/user">To user</Link> */}
      {/* 点击 NavLink 后会自动添加一个 active 类名，以便设置样式 */}

      <NavLink to="/home/66">To home/66</NavLink>||
      <NavLink to="/user">To user</NavLink>||
      <NavLink to={{ pathname: "/user", query: { name: "xzl", age: "21" } }}>To user xzl</NavLink>
      <br />
      <Button onClick={() => props.history.push('/home/99')}>To home/99（编程式导航）</Button>

      {/* exact 精准匹配 */}
      <Route exact path="/" component={Home} />
      <Route path="/home/:param" component={Home} />

      {/* Switch 防止同一 path 的组件重复渲染 */}
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/user" component={User} />
      </Switch>

      <Redirect exact from="/" to="/home" />

      {/* 子传父 SimpleChild to Parent */}
      <Parent />

      {/* 父传子 App to SimpleChild */}
      {/* <SimpleChild text="嘤嘤嘤" /> */}
      <ThemeContext.Provider value="dark">
        <ContextChild />
      </ThemeContext.Provider>

      <img src={MyLogo} alt='MyLogo' />
      <img src={require('./assets/ZX.png')} alt='MyLogo' />

      {/* <header className="App-header">
        {_.maxBy}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default withRouter(App);
