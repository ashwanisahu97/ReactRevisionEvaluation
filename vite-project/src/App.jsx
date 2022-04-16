import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { createStore } from "redux";
import { Table } from "./Components/Table"
const intialState = {}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Table/>
    </div>
  )
}

export default App
