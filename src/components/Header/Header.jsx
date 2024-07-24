'use client';
import React, { useState, useContext, useEffect } from 'react'
import "./Header.style.css"
import {FaSun, FaMoon} from "react-icons/fa"
import { ThemeContext } from '../context/LinghtDarkContext'

// nosso cabeçalho
function Header() {
  
  // trazendo o nosso contexto para esse componente
  const {theme, handleTheme} = useContext(ThemeContext)

  const [toggleState, setToggleState] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  function handleToggle(event) {
      event.preventDefault()
      setToggleState(!toggleState)
  }

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`cabecalho ${scrolled ? 'scrolled' : ''}`}>
        <a href='#sobre_mim' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p style={{color:"#F57D1F", fontWeight:"900", fontSize:"40px"}}>S</p>ilva
        </a>

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