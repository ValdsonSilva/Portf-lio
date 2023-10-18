
function Main() {
    
    return (
        
        <main>
           <section id="sobre_mim">
            {/* texto */}
            <div>

              <h1>Valdson Silva</h1>
              <h2>Desenvolvedor React.js</h2>
              <p>
                Sou um estudando de TI que tem uma profunda paixão pelo Frontend.
                atualmente tenho focado em trabalhar com React e Javascript e possuo 
                sólida compreensão em html e css, porém, tenho conhecimentos com o python
                e o framework Backend Django.
              </p>

              {/* email - github - linkedin */}
              <nav>
                <li><a href=""><img src="/" alt="" /></a></li>
                <li><a href=""><img src="/" alt="" /></a></li>
                <li><a href=""><img src="/" alt="" /></a></li>
              </nav>
            </div>

            <figure>
              <img src='/' alt='minha foto'/>
            </figure>
           </section>
        </main>
    )
}

export default Main;