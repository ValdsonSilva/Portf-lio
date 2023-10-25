import "./Main.style.css"
import foto from "../../assets/foto.jpeg"
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdEmail} from "react-icons/md"

function Main() {
    // retorno da API do github
    const repositorios = [
        {
           nome: "soticon",
           imagem:"Verde" ,
        },
        {
            nome: "QuizReact",
            imagem:"Imagem Quiz" ,
        },
        {
            nome: "Busca CEP",
            imagem:"imagem busca cep" ,
        }
    ]

    return (
        
        <main>
            <section id="sobre_mim">
                    {/* texto */}
                    <div>
                        <h1>Valdson Silva</h1>
                        <h2>Desenvolvedor React.js</h2>
                        <div className="texto">
                            <p>
                            Olá, meu nome é Valdson Silva, sou desenvolvedor Front-end
                            e adoro criar coisas para a web
                            </p>
                        </div>

                        {/* email - github - linkedin */}
                        <nav>
                            <li>
                                <a href="https://www.linkedin.com/in/valdson-mac%C3%AAdo-35981426b/">
                                    <FaLinkedin size={50}/>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/ValdsonSilva">
                                    <FaGithub size={50}/>
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://is.gd/ySE8mH">
                                    <MdEmail size={50}/>
                                </a>
                            </li>
                        </nav>
                    </div>

                    <figure>
                        <img src={foto} alt='minha foto' className="foto"/>
                    </figure>
            </section>

            <section id="tecnologias">
                <h1>Tecnologias</h1>
                {repositorios.map((repo) => (
                    <div key={repo.id}>
                        <h1>{repo.nome}</h1>
                        <p>{repo.imagem}</p>
                    </div>
                ))}
            </section>

            <section id="projetos">
            </section>
    
        </main>
    )
}

export default Main;