import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import './index.css'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const LightTheme = () => {
    setThemeMode("light")
  }
  
  const DarkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    let htmls = document.querySelector('html')
    htmls.classList.remove("light", "dark")
    htmls.classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, LightTheme, DarkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
            <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
