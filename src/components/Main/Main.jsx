import "./Main.style.css"
import foto from "../../assets/foto.jpeg"
import {FaLinkedin, FaGithub, FaReact, FaCss3, FaHtml5, FaPython} from 'react-icons/fa';
import {MdEmail, MdJavascript} from "react-icons/md"
import { ThemeContext } from "../context/LinghtDarkContext";
import { useContext } from "react";

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

    const tecnologias = [
        {
            stack : "React.js",
            image : <FaReact size={300}/>
        }, 
        {
            stack : 'Javascript',
            image : <MdJavascript size={300}/>
        },
        {
            stack : 'Django',
            image : ''
        },
        {
            stack : 'Python',
            image : <FaPython size={300}/>
        },
        {
            stack : 'HTML',
            image : <FaHtml5 size={300}/>
        },
        {
            stack : 'CSS',
            image : <FaCss3 size={300}/>
        }
    ]

    const {theme} = useContext(ThemeContext)

    // console.log(theme)


    // Identificar o clique no menu
    // Verificar o item que foi clicado e fazer referência com o alvo
    // Verificar a distância entre o alvo e o topo
    // Animar o scroll até o alvo

    const menuItems = document.querySelectorAll('.menu a[href^="#"]');

    // Identificar o clique no menu
    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    })

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        // retorna a distância do elemento em relação ao topo
        return document.querySelector(id).offsetTop;
    }
    
    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 80;
        scrollToPosition(to);
    }

    function scrollToPosition(to) {
        // window.scroll({
        //   top: to,
        //   behavior: "smooth",
        // });
        smoothScrollTo(0, to);
    }

    /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        duration = typeof duration !== 'undefined' ? duration : 400;

        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };


    return (
        
        <main className={`main ${theme ? 'light' : ''}`}>
            <section id="sobre_mim">
                    {/* texto */}
                    <div>
                        <h1>Valdson Silva</h1>
                        <h2>Desenvolvedor React.js</h2>
                        <div className="texto">
                            <p className={`p ${theme ? 'dark' : ''}`}>
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
                <div className="carts_father">
                    {tecnologias.map((tech) => (
                        <div key={tech.id} className="carts_child">
                            {/* <h1 key={tech.id}>{tech.stack}</h1> */}
                            {tech.image}
                        </div>
                    ))}
                </div>
            </section>

            <section id="projetos">
                <h1>Projetos</h1>
                <div className="carts_projects_father">
                    {repositorios.map((repo) => (
                        <div key={repo.id} className="carts_projects_child">
                            <h1 key={repo.id}>{repo.nome}</h1>
                            <p key={repo.id}>{repo.imagem}</p>
                        </div>
                    ))}
                </div>
            </section>
    
        </main>
    )
}

export default Main;