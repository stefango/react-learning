import React, {useState, useEffect} from 'react'

export default function Hook() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter + ' time(s) cliked'
  },[])
  // 
  return (
    <div>
      <h2>HookDemo</h2>
      Counter: {counter}
      <button onClick={() => { setCounter(counter + 1) }}>add</button>
    </div>
  )
}
