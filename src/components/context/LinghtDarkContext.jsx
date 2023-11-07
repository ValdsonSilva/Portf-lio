import {createContext, useState} from "react"

// nosso contexto
export const ThemeContext = createContext() 

// nosso provider que receberá comps filhos({chlidren})
export const ThemeProvider = ({children}) => {

    // estado do nosso tema
    const [theme, setTheme] = useState(false)

    const handleTheme = (event) => {
        event.preventDefault()
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{theme, handleTheme}}>{children}</ThemeContext.Provider>
    )
}
