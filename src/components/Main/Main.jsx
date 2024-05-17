'use client';

import "./Main.style.css"
import foto from "../../assets/foto.jpeg"
import {FaLinkedin, FaGithub, FaReact, FaCss3, FaHtml5, FaPython} from 'react-icons/fa';
import {MdEmail, MdJavascript} from "react-icons/md"
import django from "../../assets/Django-icon.svg"
import { ThemeContext } from "../context/LinghtDarkContext";
import { useContext, useEffect, useRef} from "react";
import balletbot from "../../assets/balletbot.png"
import quiz from "../../assets/quiz.png"


function Main() {
    // lista de imagens de fundo dos projetos
    const projectsBackImages = [ balletbot, quiz]

    // retorno da API do github
    const repositorios = [
        {
           nome: "Quiz Javascript",
           stacks:"React.js",
           link: "https://quizjavascript.vercel.app/",
           alternativo : "Jogo de perguntas técnicas de Javascript para testar o conhecimento do usuário.",
           fundo : projectsBackImages[1]
        },
        {
            nome: "Ballet Bot",
            stacks:"HTML,CSS,JS" ,
            link: "https://desafio-ballet-bot.vercel.app/",
            alternativo : "Desafio de reproduzir layout disponibilizado no fígma de uma landin page do Ballet Bot.",
            fundo : projectsBackImages[0]
        },
        // {
        //     nome: "Busca CEP",
        //     imagem:"imagem busca cep" ,
        //     link: "",
        //     alternativo : ""
        // }
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
                         width={200} 
                         height={200}
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
                        <h1 style={{color: theme ? "#000" : ""}}>Valdson Silva</h1>
                        <h2 style={{color: theme ? "#F57D1F" : "rgb(25, 226, 241)"}}>Desenvolvedor React.js</h2>
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

                    <div className="container">
                        <i style={{color: theme ? "#F57D1F" : "#fff"}}></i>
                        <i style={{color: theme ? "#F57D1F" : "#fff"}}></i>
                        <i style={{color: theme ? "#F57D1F" : "#fff"}}></i>

                        <figure>
                            <img src={foto} alt='minha foto' className="foto" style={{borderColor: theme ? "#F57D1F" : "#fff"}}/>
                        </figure>
                    </div>

            </section>

            {/* <section id="sobre">
                <h1 style={{color: theme ? 'orange' : '#19e2f1'}}>Sobre mim</h1>
                
                <div>
                    <p style={{color: theme ? 'orange' : ' #19e2f1'}}>
                        Desenvolvedor apaixonado pelo universo do Front-end.
                        Atualmente estou em formação pela Instituto Federal de Educação Ciência e Tecnologia do Piauí. 
                        Possuo domínio em JavaScript, CSS e HTML, além de experiência com ferramentas como React.js e Django.  
                        Sou um profissional ágil, com experiência em resolução de problemas de forma rápida e facilidade em trabalhar em equipes.
                    </p>
                </div>
            </section> */}

            <section id="tecnologias">
                <h1 style={{color: theme ? "#000" : ""}}>Tecnologias</h1>
                <div className="carts_father">
                    {tecnologias.map((tech) => (
                        <div key={tech.id} className="carts_child">
                            {tech.image}
                            <h1 key={tech.id} style={{color: theme ? "#F57D1F" : "#000"}}>{tech.stack}</h1>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projetos">
                <h1 style={{color: theme ? "#000" : ""}}>Projetos</h1>
                <div className="carts_projects_father">
                    {repositorios.map((repo) => (
                        <div key={repo.id} className="carts_projects_child">
                            <h1>{repo.nome}</h1>
                            <h2>{repo.stacks}</h2>
                            <div className="linha"></div>
                            <p>{repo.alternativo}</p>
                            <a href={repo.link}>Ver projeto...</a>
                        </div>
                    ))}
                </div>
            </section>
    
        </main>
    )
}

export default Main;