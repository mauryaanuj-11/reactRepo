import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      <h1 className="text-3xl border-l-emerald-950"> Redux Tool kit Todo List</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
