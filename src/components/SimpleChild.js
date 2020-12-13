import React, { Component } from 'react'
import PubSub from "pubsub-js";

export default class SimpleChild extends Component {
  constructor(props) {
    super(props)

    this.state = {
      childParm: '子传父的数据',
      param: '同级传递的数据'
    }
  }

  sendToBro() {
    console.log("SimpleChild Publish", this.state.param)
    PubSub.publish("evt", this.state.param)
  }

  render() {
    return (
      //不额外渲染div
      <>
        <p>{this.props.text}</p>
        <button onClick={this.props.parentFun.bind(this, this.state.childParm)}>子传父</button>
        <button onClick={this.sendToBro.bind(this)}>同级传递</button>
      </>
    )
  }
}
