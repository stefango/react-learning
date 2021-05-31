// import React from 'react'
// import { store } from '../redux/store'
// import * as action from '../redux/action'

// export default function ReduxDemo() {
//   return (
//     <div>
//       <h2>ReduxDemo</h2>
//       {store.getState()}
//       <button onClick={()=>{store.dispatch(action.add(1))}}>+1</button>
//       <button onClick={()=>{store.dispatch(action.subtract(1))}}>-1</button>
//     </div>
//   )
// }
import React, { Component } from 'react'
import { store } from '../redux/store'
import * as action from '../redux/action'

export default class ReduxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: store.getState()
    }
  }

  componentDidMount() {
    store.subscribe(() => this.setState({
      num: store.getState()
    }))
  }

  render() {
    return (
      <div>
        <h2>ReduxDemo</h2>
        {store.getState()}
        <button onClick={() => { store.dispatch(action.add(1)) }}>+1</button>
        <button onClick={() => { store.dispatch(action.subtract(1)) }}>-1</button>
        <hr />
      </div>
    )
  }
}
