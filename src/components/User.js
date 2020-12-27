// import React, { Component } from 'react'

// export default class User extends Component {
//   componentDidMount() {
//     console.log(this.props.location.query);
//   }
//   render() {
//     return (
//       <div class="active">
//         User 组件
//       </div>
//     )
//   }
// }

import React from 'react'

function User(props) {
  console.log('User Props', props);
  console.log('User props.location.query', props.location.query);
  let query = props.location.query
  if (!query) {
    return (
      <div className="active">
        User 组件: query 不存在
      </div>
    )
  }
  let queryName = "-1"
  if (query.name) {
    queryName = query.name
  }
  return (
    <div className="active">
      User 组件: query.name 为 {queryName}
    </div>
  )
}
export default User