import React, { Component } from 'react'
import SimpleChild from './SimpleChild'
import SimpleChildBro from './SimpleChildBro'

export default class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '默认值'
    }
  }

  updateText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <>
        父组件text---{this.state.text}
        <SimpleChild parentFun={this.updateText} />
        <SimpleChildBro />
      </>
    )
  }
}
