import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white-700 bg-slate-600 p-4 text-3xl'>Hello World!</h1>
    </>
  )
}

export default App
