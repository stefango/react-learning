import React, { Component } from 'react'
import PubSub from "pubsub-js";

export default class SimpleChildBro extends Component {
  constructor(props) {
    super(props)
    console.log("SimpleChildBro Subscribe")
    PubSub.subscribe('evt', (msg, data) => {
      console.log(msg, data); // evt 数据
    })
  }

  render() {
    return (
      <>
        SimpleChildBro
      </>
    )
  }
}
