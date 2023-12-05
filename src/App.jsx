import { useState, useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ThemeContext } from './components/context/LinghtDarkContext'


function App() {
  const [count, setCount] = useState(0)

   document.title = "Portfólio Front-End"

  useEffect(() => {

    return () => {
      document.title = "Portfólio"
    }
  }, [])

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App${theme ? 'light' : ''}`}>
        <Header/>
        {/* conteudo principal */}
        <Main/>

        <footer></footer>
    </div>
  )
}

export default App
