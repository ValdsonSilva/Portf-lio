import React from 'react'
import "./Header.style.css"
// nosso cabeçalho

function Header() {

  return (
    <header className='cabecalho'>
        <h1>Desenvolvedor</h1>

        <nav className='navegacao'>
            <li><a href="/">Sobre mim</a></li>
            <li><a href="/">Tecnologias</a></li>
            <li><a href="/">Projetos</a></li>
        </nav>

        <button>light/dark</button>

    </header>
  )
}

export default Header;