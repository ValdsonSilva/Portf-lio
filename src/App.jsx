import { useState, useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from "./components/Footer/Footer"
import { ThemeContext } from './components/context/LinghtDarkContext'


function App() {
  const [count, setCount] = useState(0)

   document.title = "Portfólio Front-End"

  useEffect(() => {
    return () => {
      document.title = "Silva"
    }
  }, [])

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App${theme ? 'light' : ''}`}>
        <Header/>
        {/* conteudo principal */}
        <Main/>

        <Footer/>
    </div>
  )
}

export default App
