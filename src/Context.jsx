import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector('body');
    body.classList.toggle("dark-theme", newDarkTheme)
  }

  return (
    <AppContext.Provider value={{isDarkTheme, toggleDarkTheme}}>
    <div>{children}</div>
    </AppContext.Provider>
  )
}

export default AppProvider