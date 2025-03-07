import "./Main.style.css"
import foto from "../../assets/foto_forte.jpg"
import {FaLinkedin, FaGithub, FaReact, FaCss3, FaHtml5, FaPython, FaNodeJs, FaCheck, FaShare, FaShareAlt, FaArrowLeft, FaArrowRight, FaArrowsAlt, FaLink} from 'react-icons/fa';
import {MdJavascript} from "react-icons/md"
import {SiMongodb, SiTailwindcss, SiPrisma, SiExpress, SiVite} from "react-icons/si"
import {FiExternalLink} from "react-icons/fi"
import { ThemeContext } from "../context/LinghtDarkContext";
import { useContext, useEffect, useRef, useState} from "react";
import balletbot from "../../assets/balletbot.png"
import quiz from "../../assets/quiz.png"
import foto_pessoal from "../../assets/foto_pessoal.png"
import caistech from "../../assets/Caistech.jpg"
import cef from "../../assets/CefFloriano.png"
import soticon from "../../assets/soticon.png"



function Main() {
    const [loaded, setLoaded] = useState(false)
    // lista de imagens de fundo dos projetos
    const projectsBackImages = [ cef, caistech, balletbot, quiz, soticon]

    // retorno da API do github
    const repositorios = [
        {
            nome: "SOTICON",
            stacks:"HTML,CSS,JS" ,
            link: "https://front-soticon.vercel.app/",
            alternativo : `Um sistema voltado para a solicitação de tickets do ônibus 
                           escolar do IFPI campus Floriano onde fui o responsável por 
                           toda o desenvolvimento do Front-end desse projeto tendo a oportunidade
                           de me adaptar bastante ao uso do Vanilla Js (js Puro). `,
            tecnologias: ["HTML", "CSS", "JS"],
            fundo : projectsBackImages[4]
        },
        {
            nome: "CEF Floriano",
            stacks:"HTML,CSS,JS" ,
            link: "https://cefedu.com.br/",
            alternativo : `O CEF é uma instituição de ensino que contou comigo e mais 4 colegas 
                           para que fosse desenvolvida essa plataforma única para o nosso cliente, contando 
                           com diversas funcionalidades, a plataforma se asemelha bastante ao Google Class, 
                           porém, conta com as particularidades que o cliente pediu, como
                           módulos voltados para o gerenciamento de concursos públicos realizados pelo CEF.
                           Essa plataforma foi feita com `,
            tecnologias: ["Next.js","JS", "Tailwind", "Mui Material", "Django."],
            fundo : projectsBackImages[0]
        },
        {
            nome: "CaisTech 2024",
            stacks:"HTML,CSS,JS" ,
            link: "https://valdson-silva-cais-tech24.vercel.app/",
            alternativo : `Projeto voluntário de construção de site para um evento institucional da universidade.
                           O evento é chamado CaisTech que se tratar do maior evento de tecnologia do Sul do Piauí,
                           eu e mais 2 colegas construimos essa UI magnifica do jeito que o nosso evento merece utilizando `,
            tecnologias: ["HTML", "CSS", "JavaScript."],
            fundo : projectsBackImages[1]
        },
        {
            nome: "Ballet Bot",
            stacks:"HTML,CSS,JS" ,
            link: "https://desafio-ballet-bot.vercel.app/",
            alternativo : `Desafio de reproduzir layout disponibilizado no fígma de uma 
                           landin page do Ballet Bot. Nesse site estou utilizando as tecnologias
                           básicas de front-end como `,
            tecnologias: ["HTML", "CSS", "JavaScript."],
            fundo : projectsBackImages[2]
        },
        {
           nome: "Quiz Javascript",
           stacks:"React.js",
           link: "https://quizjavascript.vercel.app/",
           alternativo : `Jogo de perguntas técnicas de Javascript para testar o conhecimento do usuário.
                          Esse quiz se trata do meu primeiro projeto em React, nele faço uso de alguns hooks
                          como useState, useEffect e o código também conta com o gerenciamento de estados globais
                          no contexto do jogo.`,
            tecnologias: [""],
           fundo : projectsBackImages[3]
        },
    ]

    const tecnologias = [
        {
            stack : "React.js",
            image : <FaReact size={100} aria-label="Logo do react.js"/>
        }, 
        {
            stack : 'Vite',
            image : <SiVite size={100} aria-label="Logo do Vite"/>
        },
        {
            stack : 'Javascript',
            image : <MdJavascript size={100} aria-label="Logo do Javascript"/>
        },
        {
            stack : 'HTML',
            image : <FaHtml5 size={100} aria-label="Logo do html"/>
        },
        {
            stack : 'CSS',
            image : <FaCss3 size={100} aria-label="Logo do css"/>
        },
        {
            stack : 'Tailwind CSS',
            image : <SiTailwindcss size={100} aria-label="Logo do Tailwind CSS"/>
        },
        {
            stack : 'Node.js',
            image : <FaNodeJs size={100} aria-label="Logo do Node js"/>
        },
        {
            stack : 'Express js',
            image : <SiExpress size={100} aria-label="Logo do Express js"/>
        },
        {
            stack : 'MongoDb',
            image : <SiMongodb size={100} aria-label="Logo do MongoDb"/>
        },
        {
            stack : 'Prisma ORM',
            image : <SiPrisma size={100} aria-label="Logo do Prisma ORM"/>
        }
    ]

    const {theme} = useContext(ThemeContext)

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
            const to = getScrollTopByHref(event.target) - 50; // tive que diminuir para nivelar na section
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
        
        <main className={`main light`}>
            <section id="sobre_mim">
                    {/* texto */}
                    <div>
                        <h1 style={{color: "#19e2f1"}}>Valdson Silva</h1>
                        <h2 style={{color: "#F57D1F"}}>
                            Desenvolvedor Front-end
                        </h2>
                        <div className="texto">
                            <p style={{color: "#000"}}>
                            Olá, meu nome é Valdson, sou um desenvolvedor 
                            Front-end e estou aqui para resolver 
                            seus problemas.
                            </p>
                        </div>

                        {/* github - linkedin */}
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
                        </nav>
                    </div>

                    <div className="container">
                        <figure>
                            <img src={foto_pessoal} alt='minha foto' className="foto" style={{borderColor: theme ? "#fff" : "#F57D1F"}}/>
                        </figure>
                    </div>

            </section>

            <section id="sobre">
                <h1 style={{color: theme ? '#000' : '#19e2f1'}}>Sobre mim</h1>
                
                <div>
                    <p style={{color: '#000'}}>
                        Desenvolvedor apaixonado pelo universo do <span style={{color: "#058ea9"}}>Front-end</span>.
                        Atualmente estou em formação pela Instituto Federal de Educação Ciência e Tecnologia do Piauí. 
                        Possuo domínio em <span style={{color: "#058ea9"}}>JavaScript, CSS e HTML</span>, além de experiência com ferramentas como 
                         <span style={{color: "#058ea9"}}> React.js, Node.js, Express, Prisma e MongoDb</span>.  
                        Sou um profissional ágil, com experiência em resolução de problemas de forma rápida e facilidade em trabalhar em equipes.
                    </p>
                    
                    <figure className="FotoContainer">
                        <img className="fotoPessoal" src={foto} alt="Foto pessoal sorrindo" />
                    </figure>
                </div>
            </section>

            <section id="tecnologias">
                <h1 style={{color: theme ? "#000" : ""}}>Tecnologias</h1>
                <div className="carts_father">
                    {tecnologias.map((tech) => (
                        <div key={tech.id} className="carts_child">
                            {tech.image}
                        </div>
                    ))}
                </div>
            </section>

            <section id="projetos">
                <h1 style={{color: theme ? "#000" : ""}}>Projetos</h1>
                <div className="carts_projects_father">
                    {repositorios.map((repo, index) => (
                        <div className={index % 2 === 0 ? 'row' : 'reverse'} id="cardProject">  
                            <div href={repo.link}>
                                <figure className="carts_projects_child">
                                    <img src={repo.fundo}></img>
                                </figure>
                            </div>
                            <a href={repo.link} className="overlay">
                                <h1 id="projetos_title" style={{fontSize: "2em", color:"#F57D1F", textAlign:"center"}}>{repo.nome}</h1>
                                <p>
                                    {repo.alternativo}
                                    <span style={{color:"#F57D1F"}}>
                                        {repo.tecnologias.join(", ")}
                                    </span>
                                </p>
                                <div className="link">
                                    <FiExternalLink/>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
    
        </main>
    )
}

export default Main;