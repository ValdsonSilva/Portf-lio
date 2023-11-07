import React, { useState, useContext } from 'react'
import "./Header.style.css"
import {FaSun, FaMoon} from "react-icons/fa"
import { ThemeContext } from '../context/LinghtDarkContext'

// nosso cabeçalho
function Header() {
  
  // trazendo o nosso contexto para esse componente
  const {theme, handleTheme} = useContext(ThemeContext)

  return (
    <header className='cabecalho'>
        <h1>Desenvolvedor</h1>

        <nav className='navegacao'>
            <li><a href="#sobre_mim">Sobre mim</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
        </nav>

        <button onClick={handleTheme}>
          {theme ? <FaMoon size={25}/> : <FaSun size={25}/>}
        </button>

    </header>
  )
}

export default Header;