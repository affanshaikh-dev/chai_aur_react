import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <Card username="Shaikh Yusuf" btnText="Chick Me" />
      <Card username="Shaikh Affan" btnText="Visit Me"/>
    </>
  )
}

export default App
