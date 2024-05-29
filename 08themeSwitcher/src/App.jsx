import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import CardBtn from  './components/CardBtn'

function App() {
  const [theme, setTheme] = useState("light")

  const lightTheme=() =>{
    setTheme("light");
  }
  
  const darkTheme= () => setTheme("dark");

  useEffect( ()=> {
   const gethtmlBody = document.querySelector('html');
   gethtmlBody.classList.remove("light", "dark");
   gethtmlBody.classList.add(theme);
  // document.querySelector('html').classList.remove("light", "dark")
  // document.querySelector('html').classList.add(theme)

  },[theme])
  

  return (
    <ThemeProvider value={{theme,lightTheme,darkTheme,}}>     
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Card />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                       <CardBtn />
                    </div>
                </div>
         </div>
    </ ThemeProvider>
  )
}

export default App
