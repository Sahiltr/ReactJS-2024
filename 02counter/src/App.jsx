import { useState } from 'react'
import './App.css'

function App() {

  // let count = 0;

  const  [counter, setCounter] = useState(0)


  const increaseValue = ()=>{
    setCounter(counter+1)
  }

  const decreaseValue = ()=>{
    setCounter(counter-1)
  }
  

  return (
    <>
      <h1>My counter app</h1>
      <h2>Count:{counter}</h2>
      <button onClick = {increaseValue}>Increase Value</button>{" "}
      <button onClick = {decreaseValue}>Decrease Value</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
