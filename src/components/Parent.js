import React, { Component } from 'react'
import SimpleChild from './SimpleChild'
import SimpleChildBro from './SimpleChildBro'
import axios from 'axios'
import { Table } from "antd";

export default class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '默认值',
      dataSource: [],
      columns: [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age' },
      ]
    }
  }

  updateText = (text) => {
    this.setState({
      text
    })
  }

  getRequest = () => {
    let url = 'http://localhost:4000/arr'
    let params = {}
    axios.get(url, params)
      .then(res => {
        let dataSource = [];
        res.data.forEach((item, index) => { dataSource.push({ ...item, key: index }) })
        this.setState({ dataSource })
        console.log(res)
      })
      .catch(err => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.getRequest()
  }

  render() {
    return (
      <>
        <hr/>
        父组件text---{this.state.text}
        <SimpleChild parentFun={this.updateText} />
        <SimpleChildBro />
        父组件中的表格
        <Table columns={this.state.columns} dataSource={this.state.dataSource} />
      </>
    )
  }
}
