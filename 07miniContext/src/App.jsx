import React from 'react'
import userContext from './context/UserContext'
import './App.css'
import userContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App
