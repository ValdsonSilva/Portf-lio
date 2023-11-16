import "./Main.style.css"
import foto from "../../assets/foto.jpeg"
import {FaLinkedin, FaGithub, FaReact, FaCss3, FaHtml5, FaPython} from 'react-icons/fa';
import {MdEmail, MdJavascript} from "react-icons/md"
import django from "../../assets/Django-icon.svg"
import { ThemeContext } from "../context/LinghtDarkContext";
import { useContext, useEffect, useRef} from "react";

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
            image : <FaReact size={300} aria-label="Logo do react.js"/>
        }, 
        {
            stack : 'Javascript',
            image : <MdJavascript size={300} aria-label="Logo do Javascript"/>
        },
        {
            stack : 'Django',
            image : <img src={django} 
                         alt="logo do django" 
                         width={220} 
                         height={220}
                    />
        },
        {
            stack : 'Python',
            image : <FaPython size={300} aria-label="Logo do Python"/>
        },
        {
            stack : 'HTML',
            image : <FaHtml5 size={300} aria-label="Logo do html"/>
        },
        {
            stack : 'CSS',
            image : <FaCss3 size={300} aria-label="Logo do css"/>
        }
    ]

    const {theme} = useContext(ThemeContext)

    // console.log(theme)


    // Identificar o clique no menu
    // Verificar o item que foi clicado e fazer referência com o alvo
    // Verificar a distância entre o alvo e o topo
    // Animar o scroll até o alvo

    // passando o hook useRef nulo
    const menuItemsRef = useRef(null);

    useEffect(() => {
        // acesso ao elemento do DOM
        menuItemsRef.current = document.querySelectorAll('.navegacao a[href^="#"]');

        console.log(menuItemsRef.current)

        // Identificar o clique no menu
        menuItemsRef.current.forEach(item => {
            item.addEventListener('click', scrollToIdOnClick);
        })

        function getScrollTopByHref(element) {
            // pegando o id de cada botão "a"
            const id = element.getAttribute('href');
            // retorna a distância do elemento em relação ao topo
            return document.querySelector(id).offsetTop;
        }

        function scrollToIdOnClick(event) {
            event.preventDefault();
            // distância do elemento em relação ao topo
            const to = getScrollTopByHref(event.target) - 200;
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
    
            duration = typeof duration !== 'undefined' ? duration : 100;
    
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
        }, 1000 / 30); // 30 fps
    };

    }, []) // executando apenas uma vez

    return (
        
        <main className={`main ${theme ? 'light' : ''}`}>
            <section id="sobre_mim">
                    {/* texto */}
                    <div>
                        <h1>Valdson Silva</h1>
                        <h2>Desenvolvedor React.js</h2>
                        <div className="texto">
                            <p className={`p ${theme ? 'dark' : ''}`}>
                            Olá, meu nome é Valdson Silva, 
                            sou desenvolvedor Front-end
                            e adoro criar coisas para a web.
                            </p>
                        </div>

                        {/* email - github - linkedin */}
                        <nav>
                            <li>
                                <a href="https://www.linkedin.com/in/valdson-mac%C3%AAdo-35981426b/">
                                    <FaLinkedin size={50} aria-label="ícone do linkedin"/>
                                </a>
                                <p>Linkedin</p>
                            </li>

                            <li>
                                <a href="https://github.com/ValdsonSilva">
                                    <FaGithub size={50} aria-label="ícone do github"/>
                                </a>
                                <p>Github</p>
                            </li>
                            
                            <li>
                                <a href="https://is.gd/ySE8mH">
                                    <MdEmail size={50} aria-label="ícone do email"/>
                                </a>
                                <p>Email</p>
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
                            {tech.image}
                            <h1 key={tech.id}>{tech.stack}</h1>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projetos">
                <h1>Projetos</h1>
                <div className="carts_projects_father">
                    {repositorios.map((repo) => (
                        <div key={repo.id} className="carts_projects_child">
                            <h2 key={repo.id}>{repo.nome}</h2>
                            <p key={repo.id}>{repo.imagem}</p>
                        </div>
                    ))}
                </div>
            </section>
    
        </main>
    )
}

export default Main;