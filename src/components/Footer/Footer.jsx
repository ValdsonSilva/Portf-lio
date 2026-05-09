import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function Footer() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector('#sobre_mim')

      if (firstSection) {
        const firstSectionBottom = firstSection.getBoundingClientRect().bottom
        setShowButton(firstSectionBottom <= 0)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className="footer">
      <p>&copy; 2026 Todos os direitos reservados.</p>

      {showButton && (
        <a href="#sobre_mim" className="back-to-top" aria-label="Voltar ao topo">
          <FaArrowUp />
        </a>
      )}
    </footer>
  )
}

export default Footer
