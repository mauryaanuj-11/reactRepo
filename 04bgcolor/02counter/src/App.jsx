import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App(){
  let [counter,setCounter]=useState(7);   // Here we can define function, object,null value,number etc

  const addValue=()=>{
    console.log("Clicked ", counter);
    if(counter>20){
      console.log("You reached your maximum value", counter)
    }
    else{
      setCounter(counter+1)
    }
  }

  const removeValue=function(){
    if(counter < 0)
    console.log("You reached your minimum value");
    else
    setCounter(counter-1);
  }

  return (
    <>
    <h2>Counter {counter}</h2>
    <button onClick={addValue}>Add counter {counter}</button> <br/>
    <button onClick={removeValue}>Remove counter {counter}</button><br/>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
