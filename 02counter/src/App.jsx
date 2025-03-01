import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  const addValue = () => {
    console.log("clicked", counter)
    if(counter < 20) {
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
    } else {
      console.log("The counter will not updated")
    }
  }

  const remValue = () => {
    if(counter > 0) {
      setCounter(counter--)
    } else {
      console.log("The counter will not updated")
    }
  }

  return (
    <>
      <h3>Chai Aur React</h3>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={remValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
