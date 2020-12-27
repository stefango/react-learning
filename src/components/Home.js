import React from 'react'
import { useParams } from "react-router-dom";

export default function Home(props) {
  let { param } = useParams();
  let obj = useParams();
  return (
    <div>
      <p className="active">Home 函数组件---start</p>
      <p>useParams 接收参数 {param}</p>
      <p>路由参数 {props.match.params.param}</p>
      <p className="active">Home 函数组件---end</p>
    </div>
  )
}

// react-router-dom useParams() inside class component
// https://stackoverflow.com/questions/58548767/react-router-dom-useparams-inside-class-component
// import React from "react";
// import { withRouter } from "react-router";

// class Home extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       param: '默认值'
//     }
//   }

//   componentDidMount() {
//     const { param } = this.props.match.params;
//     this.setState({
//       param
//     })
//   }

//   render() {
//     return <div>Home 类组件，参数 {this.state.param}</div>;
//   }
// }

// export default withRouter(Home);