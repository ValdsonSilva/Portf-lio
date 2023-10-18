import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
        {/* cabeçalho */}
        <Header/>
        
        <Main/>

        <h1>Portfólio do Valdson</h1>
    </div>
  )
}

export default App
