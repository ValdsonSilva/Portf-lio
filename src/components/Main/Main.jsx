import './Main.style.css'
import foto from '../../assets/foto_forte.jpg'
import fotoPessoal from '../../assets/foto_pessoal.png'
import balletbot from '../../assets/balletbot.png'
import quiz from '../../assets/quiz.png'
import caistech from '../../assets/Caistech.jpg'
import cef from '../../assets/CefFloriano.png'
import soticon from '../../assets/soticon.png'
import soticonImg from '../../assets/expe/soticon.png'
import cefImg from '../../assets/expe/cef.png'
import apiImg from '../../assets/api.png'
import hoopi from '../../assets/hoopi.png'
import sigec from '../../assets/sigec.png'
import grproImg from '../../assets/expe/grpro.png'
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaCss3,
  FaHtml5,
  FaNodeJs,
} from 'react-icons/fa'
import { MdJavascript } from 'react-icons/md'
import {
  SiTailwindcss,
  SiPrisma,
  SiExpress,
  SiVite,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

function Main() {
  const repositorios = [
    {
      nome: 'Hoopi',
      link: 'https://www.hoopi.com.br/',
      alternativo:
        'Sistema web que facilita o agendamento de viagens curtas, conectando passageiros e condutores de forma rápida, segura e organizada. Atuo como liderança técnica no front-end, contribuindo com ',
      tecnologias: ['React.js', 'Front-End', 'UX', 'Responsividade'],
      fundo: hoopi,
    },
    {
      nome: 'Sigec',
      link: 'http://200.137.175.4:5173/login',
      alternativo:
        'Sistema institucional de gerenciamento de chaves do IFPI Campus Floriano, criado para controlar o acesso às chaves da instituição de forma organizada e segura. Atuo como desenvolvedor e líder técnico no front-end, utilizando ',
      tecnologias: ['React.js', 'TypeScript', 'Tailwind CSS'],
      fundo: sigec,
    },
    {
      nome: 'SOTICON',
      link: 'https://front-soticon.vercel.app/',
      alternativo:
        'Sistema voltado para a solicitação de tickets do ônibus escolar do IFPI Campus Floriano. Atuei no desenvolvimento da interface e na construção da experiência do usuário utilizando ',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      fundo: soticon,
    },
    {
      nome: 'CEF Floriano',
      link: 'https://cefedu.com.br/',
      alternativo:
        'Plataforma educacional desenvolvida em equipe para uma instituição de ensino, com recursos para gerenciamento de aulas, usuários e concursos públicos. O projeto foi desenvolvido com ',
      tecnologias: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Django'],
      fundo: cef,
    },
    {
      nome: 'CaisTech 2024',
      link: 'https://valdson-silva-cais-tech24.vercel.app/',
      alternativo:
        'Projeto voluntário para o site oficial de um evento institucional de tecnologia do Sul do Piauí. Participei da criação da interface e da implementação visual usando ',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      fundo: caistech,
    },
    {
      nome: 'UlcerAid Node API',
      link: 'https://github.com/ValdsonSilva/UlcerAid_api_node',
      alternativo:
        'API REST construída em arquitetura MVC para dar suporte a um sistema web de classificação de imagens de pés diabéticos com úlceras. A aplicação foi desenvolvida com ',
      tecnologias: ['Node.js', 'Express', 'Prisma'],
      fundo: apiImg,
    },
    {
      nome: 'Ballet Bot',
      link: 'https://desafio-ballet-bot.vercel.app/',
      alternativo:
        'Landing page desenvolvida a partir de um layout disponibilizado no Figma, com foco em fidelidade visual, estruturação de componentes e responsividade usando ',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      fundo: balletbot,
    },
    {
      nome: 'Quiz JavaScript',
      link: 'https://quizjavascript.vercel.app/',
      alternativo:
        'Jogo de perguntas técnicas sobre JavaScript criado para testar conhecimentos de programação. Foi meu primeiro projeto em React e utiliza hooks, controle de estado e contexto com ',
      tecnologias: ['React.js', 'JavaScript', 'Context API'],
      fundo: quiz,
    },
  ]

  const tecnologias = [
    {
      stack: 'React.js',
      image: <FaReact aria-hidden="true" />,
    },
    {
      stack: 'TypeScript',
      image: <SiTypescript aria-hidden="true" />,
    },
    {
      stack: 'Vite',
      image: <SiVite aria-hidden="true" />,
    },
    {
      stack: 'JavaScript',
      image: <MdJavascript aria-hidden="true" />,
    },
    {
      stack: 'HTML',
      image: <FaHtml5 aria-hidden="true" />,
    },
    {
      stack: 'CSS',
      image: <FaCss3 aria-hidden="true" />,
    },
    {
      stack: 'Tailwind CSS',
      image: <SiTailwindcss aria-hidden="true" />,
    },
    {
      stack: 'Node.js',
      image: <FaNodeJs aria-hidden="true" />,
    },
    {
      stack: 'Express.js',
      image: <SiExpress aria-hidden="true" />,
    },
    {
      stack: 'Prisma ORM',
      image: <SiPrisma aria-hidden="true" />,
    },
    {
      stack: 'PostgreSQL',
      image: <SiPostgresql aria-hidden="true" />,
    },
  ]

  const experiencias = [
    {
      id: 'grpro',
      img: grproImg,
      duracao: 'jun de 2025 - o momento · 1 ano',
      cargo: 'Desenvolvedor de Software Full Stack',
      empresa: 'GrPro.Solution · Tempo integral',
      local: 'Floriano, Piauí, Brasil · No local',
      desc: 'Atuação no desenvolvimento e manutenção de soluções web, trabalhando em funcionalidades de front-end e back-end com foco em qualidade, usabilidade e evolução contínua do produto.',
    },
    {
      id: 'soticon',
      img: soticonImg,
      duracao: '2023 - 2024 · 2 anos',
      cargo: 'Desenvolvedor Front-End - IFPI',
      empresa: 'Projeto institucional',
      desc: 'Tecnologias: HTML, CSS e JavaScript.',
    },
    {
      id: 'cef',
      img: cefImg,
      duracao: '2024 · 5 meses',
      cargo: 'Desenvolvedor Front-End - Centro Educacional de Floriano (CEF)',
      empresa: 'Projeto para cliente',
      desc: 'Tecnologias: Next.js, JavaScript, Tailwind CSS, Material UI e Django.',
    },
  ]

  return (
    <main className="main">
      <section id="sobre_mim" className="hero section-shell">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfólio profissional</p>
          <h1>Valdson Silva</h1>
          <h2>Desenvolvedor Full Stack</h2>
          <p className="hero-description">
            Crio soluções web completas, conectando interfaces modernas, APIs bem estruturadas e experiências digitais eficientes.
          </p>

          <nav className="social-links" aria-label="Redes sociais">
            <a
              href="https://www.linkedin.com/in/valdson-mac%C3%AAdo-35981426b/"
              target="_blank"
              rel="noreferrer"
              aria-label="Acessar LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/ValdsonSilva"
              target="_blank"
              rel="noreferrer"
              aria-label="Acessar GitHub"
            >
              <FaGithub />
            </a>
          </nav>
        </div>

        <figure className="hero-photo-wrapper">
          <img src={fotoPessoal} alt="Valdson Silva" className="hero-photo" />
        </figure>
      </section>

      <section id="sobre" className="about section-shell">
        <div className="section-heading">
          <span>Sobre mim</span>
          <h2>Formação, experiência e foco em soluções completas</h2>
        </div>

        <div className="about-grid">
          <figure className="about-photo-wrapper">
            <img className="about-photo" src={foto} alt="Valdson Silva sorrindo" />
          </figure>

          <div className="about-card">
            <p>
              Sou Desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas (TADS) pelo Instituto Federal do Piauí (IFPI). Trabalho com tecnologias como <strong>TypeScript, JavaScript, React.js, Node.js, Express e Prisma</strong>, criando aplicações web com foco em clareza, performance e boa experiência para o usuário.
            </p>

            <p>
              Tenho experiência em projetos institucionais, plataformas educacionais, APIs e interfaces responsivas. Busco construir soluções bem organizadas, fáceis de evoluir e alinhadas às necessidades reais de cada projeto.
            </p>
          </div>
        </div>
      </section>

      <section id="experiencias" className="experiences section-shell">
        <div className="section-heading centered">
          <span>Experiência</span>
          <h2>Onde já atuei</h2>
        </div>

        <div className="experience-list">
          {experiencias.map((exp) => (
            <article className="experience-card" key={exp.id}>
              <div className="experience-media">
                {exp.img ? <img src={exp.img} alt={`Logo ${exp.empresa}`} /> : exp.icon}
              </div>

              <div className="experience-content">
                <p className="experience-date">{exp.duracao}</p>
                <h3>{exp.cargo}</h3>
                <p className="experience-company">{exp.empresa}</p>
                {exp.local && <p className="experience-location">{exp.local}</p>}
                <p>{exp.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="projects section-shell">
        <div className="section-heading centered">
          <span>Projetos</span>
          <h2>Alguns trabalhos desenvolvidos</h2>
        </div>

        <div className="projects-grid">
          {repositorios.map((repo) => (
            <article className="project-card" key={repo.nome}>
              <img src={repo.fundo} alt={`Imagem do projeto ${repo.nome}`} />

              <a
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                className="project-overlay"
                aria-label={`Acessar projeto ${repo.nome}`}
              >
                <h3>{repo.nome}</h3>
                <p>
                  {repo.alternativo}
                  <strong>{repo.tecnologias.join(', ')}.</strong>
                </p>
                <span>
                  Ver projeto <FiExternalLink />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="tecnologias" className="technologies section-shell">
        <div className="section-heading centered">
          <span>Tecnologias</span>
          <h2>Stack principal</h2>
        </div>

        <div className="tech-grid">
          {tecnologias.map((tech) => (
            <article key={tech.stack} className="tech-card" aria-label={tech.stack}>
              {tech.image}
              <h3>{tech.stack}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main