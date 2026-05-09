import { useEffect, useState } from 'react'
import './Header.style.css'

function Header() {
  const [toggleState, setToggleState] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  function handleToggle() {
    setToggleState((currentState) => !currentState)
  }

  function closeMenu() {
    setToggleState(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`cabecalho ${scrolled ? 'scrolled' : ''}`}>
      <a href="#sobre_mim" className="logo" onClick={closeMenu} aria-label="Voltar para o início">
        <span>S</span>ilva
      </a>

      <nav className={`navegacao ${toggleState ? 'open' : ''}`} aria-label="Navegação principal">
        <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
        <a href="#experiencias" onClick={closeMenu}>Experiência</a>
        <a href="#projetos" onClick={closeMenu}>Projetos</a>
        <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
      </nav>

      <button
        type="button"
        className={`menu-toggle ${toggleState ? 'open' : ''}`}
        onClick={handleToggle}
        aria-label={toggleState ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={toggleState}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  )
}

export default Header
