import React from 'react'
import "./Header.style.css"
// nosso cabeçalho

function Header() {

  return (
    <header className='cabecalho'>
        <h1>Desenvolvedor</h1>

        <nav className='navegacao'>
            <li><a href="#sobre_mim">Sobre mim</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
        </nav>

        <button onClick={""}>light/dark</button>

    </header>
  )
}

export default Header;