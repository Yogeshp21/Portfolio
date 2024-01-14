import Home from './Pages/Home.jsx'
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/ThemeChanger.jsx'

function App() {
  const [themeMode,setThememode] = useState('light')

  const lightTheme = () => {
    setThememode('light')
  }
  const darkTheme = () => {
    setThememode('dark')
  }

  // actual change in theme
  useEffect(() =>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

    <Home/>
    </ThemeProvider>
  )
}

export default App
