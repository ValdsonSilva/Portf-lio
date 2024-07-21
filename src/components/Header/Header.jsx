'use client';
import React, { useState, useContext } from 'react'
import "./Header.style.css"
import {FaSun, FaMoon} from "react-icons/fa"
import { ThemeContext } from '../context/LinghtDarkContext'

// nosso cabeçalho
function Header() {
  
  // trazendo o nosso contexto para esse componente
  const {theme, handleTheme} = useContext(ThemeContext)

  const [toggleState, setToggleState] = useState(false)

  function handleToggle(event) {
      event.preventDefault()
      setToggleState(!toggleState)
  }

  return (
    <header className='cabecalho'>
        <h1>Silva</h1>

        <nav className={`navegacao ${toggleState ? 'open' : ''}`}>
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
            {/* <button onClick={handleTheme} className={`botao ${toggleState ? 'open' : ''}`}>
                {theme ? <FaMoon size={25}/> : <FaSun size={25}/>}
            </button> */}
        </nav>

        

        <div className={`menu-toggle ${toggleState ? 'open' : ''}`} onClick={handleToggle} >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

    </header>
  )
}

export default Header;