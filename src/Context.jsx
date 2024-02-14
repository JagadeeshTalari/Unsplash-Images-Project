import { createContext, useContext } from "react"

const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{}}>
    <div>{children}</div>
    </AppContext.Provider>
  )
}

export default AppProvider