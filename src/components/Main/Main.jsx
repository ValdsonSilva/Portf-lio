'use client';

import "./Main.style.css"
import foto from "../../assets/foto.jpeg"
import {FaLinkedin, FaGithub, FaReact, FaCss3, FaHtml5, FaPython} from 'react-icons/fa';
import {MdEmail, MdJavascript} from "react-icons/md"
import django from "../../assets/Django-icon.svg"
import { ThemeContext } from "../context/LinghtDarkContext";
import { useContext, useEffect, useRef, useState} from "react";
import balletbot from "../../assets/balletbot.png"
import quiz from "../../assets/quiz.png"
import foto_pessoal from "../../assets/foto_pessoal.png"
import caistech from "../../assets/Caistech.jpg"
import cef from "../../assets/CefFloriano.png"



function Main() {
    const [loaded, setLoaded] = useState(false)
    // lista de imagens de fundo dos projetos
    const projectsBackImages = [ cef, caistech, balletbot, quiz, ]

    // retorno da API do github
    const repositorios = [
        {
            nome: "CEF Floriano",
            stacks:"HTML,CSS,JS" ,
            link: "https://cefedu.com.br/",
            alternativo : `Projeto freelancer de um site institucional do CEF Floriano-Pi.
                           O CEF é uma instituição de ensino que contou comigo e mais 4 colegas 
                           para que fosse desenvolvida essa plataforma única para o nosso cliente, contando 
                           com diversas funcionalidades, a plataforma se asemelha bastante ao Google Class, 
                           porém, conta com as particularidades que o cliente pediu, como
                           módulos voltados para o gerenciamento de concursos públicos realizados pelo CEF.
                           Essa plataforma foi feita com Next.js, CSS, Tailwind, Mui Material, Django.`,
            fundo : projectsBackImages[0]
        },
        {
            nome: "CaisTech 2024",
            stacks:"HTML,CSS,JS" ,
            link: "https://valdson-silva-cais-tech24.vercel.app/",
            alternativo : `Projeto voluntário de construção de site para um evento institucional da universidade.
                           O evento é chamado CaisTech que se tratar do maior evento de tecnologia do Sul do Piauí,
                           eu e mais 2 colegas utilizamos as tecnologias: HTML, CSS e JavaScript para construir essa
                           UI magnifica do jeito que o nosso evento merece.`,
            fundo : projectsBackImages[1]
        },
        {
            nome: "Ballet Bot",
            stacks:"HTML,CSS,JS" ,
            link: "https://desafio-ballet-bot.vercel.app/",
            alternativo : `Desafio de reproduzir layout disponibilizado no fígma de uma 
                           landin page do Ballet Bot. Nesse site estou utilizando as tecnologias
                           básicas de front-end como, HTML, CSS E JavaScript.`,
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
           fundo : projectsBackImages[3]
        },
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
                        <h2 style={{color: theme ? "#F57D1F" : "rgb(25, 226, 241)"}}>Desenvolvedor Front-end</h2>
                        <div className="texto">
                            <p style={{color: theme ? '#000' : ''}}>
                            Olá, meu nome é Valdson, sou um desenvolvedor 
                            Front-end e estou aqui para resolver 
                            seus problemas.
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
                            <img src={foto_pessoal} alt='minha foto' className="foto" style={{borderColor: theme ? "#F57D1F" : "#fff"}}/>
                        </figure>
                    </div>

            </section>

            <section id="sobre">
                <h1 style={{color: theme ? '#000' : '#19e2f1'}}>Sobre mim</h1>
                
                <div>
                    <p style={{color: theme ? '#000' : '#fff'}}>
                        Desenvolvedor apaixonado pelo universo do <span style={{color: theme ? "#F57D1F" : "#19e2f1"}}>Front-end</span>.
                        Atualmente estou em formação pela Instituto Federal de Educação Ciência e Tecnologia do Piauí. 
                        Possuo domínio em <span style={{color: theme ? "#F57D1F" : "#19e2f1"}}>JavaScript, CSS e HTML</span>, além de experiência com ferramentas como <span style={{color: theme ? "#F57D1F" : "#19e2f1"}}>React.js, Next, React Native e Django</span>.  
                        Sou um profissional ágil, com experiência em resolução de problemas de forma rápida e facilidade em trabalhar em equipes.
                    </p>
                    
                    <div className="fundo1" style={{backgroundColor: theme ? "#F57D1F" : "#fff"}}>
                        <div className="fundo2" style={{backgroundColor: theme ? "#F57D1F" : "#fff"}}>
                            <div className="fundo3" style={{backgroundColor: theme ? "#F57D1F" : "#fff"}}>
                                <figure className="FotoContainer">
                                    <img className="fotoPessoal" src={foto} style={{borderRadius: "100%"}} alt="Foto pessoal sorrindo" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                    {repositorios.map((repo, index) => (
                        <div key={repo.nome} className={index % 2 === 0 ? 'row' : 'reverse'}>  
                            <a href={repo.link}>
                                <figure className="carts_projects_child">
                                    <img src={repo.fundo}></img>
                                </figure>
                            </a>
                            <div>
                                <h1 id="projetos" style={{fontSize: "3em", color: theme ? '#F57D1F' : '#19e2f1'}}>{repo.nome}</h1>
                                <p style={{color: theme ? "#000" : "#fff", fontWeight:"bold", lineHeight: 1.5, textAlign: "justify"}}>
                                    {repo.alternativo}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    
        </main>
    )
}

export default Main;