import React, { Component } from 'react'
import { ThemeContext } from '../App';

export default class ContextChild extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (<h1>{context}</h1>)}
      </ThemeContext.Consumer>
    )
  }
}
/**
 * React Context 的基本用法
 * Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
 * https://www.cnblogs.com/cckui/p/12738466.html
 * 
 * https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
 */