import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'


function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
        {/* cabeçalho */}
        <Header/>
        {/* conteudo principal */}
        <Main/>

        <footer></footer>
    </div>
  )
}

export default App
