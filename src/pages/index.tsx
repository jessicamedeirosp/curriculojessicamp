import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../styles/Home.module.scss'
import Box from '../components/Box';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';


const skills = [  
  {
    title: 'Hard Skills',
    skills: [
      'Javascript',
      'Typescript',
      'HTML',
      'Css',
      'Sass/less',
      'Git/Git flow',
      'Vtex CMS e IO',
      'Bootstrap',
      'ReactJs',
      'Angular',
      'Vue.js',
      'Vuex',
      'Redux'      
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
        'Boa comunicação e escrita',  
        'Proatividade',
        'Flexbilidade',
        'Criatividade',
        'Capacidade de liderança',
        'Resiliência'
    ]
  },
];

const experiences = [
  {
    id: 1,
    occupation: 'Developer Frontend',
    company: 'KPlay',
    time: '06/2015 - 11/2020',
    abstract: `
    <p>Desenvolvimento e manutenção de sistemas voltado para a gestão de empresas de Marketing Multinível, ERP e aplicações Web</p>
    <ul>
        <li>E-Commerce</li>
        <li>Sistema de Gestão de Franquias</li>
        <li>Escritório Virtual</li>
    </ul>`,    
  },
  {
    id: 2,
    occupation: 'Analista de Sistemas',
    company: 'Compufour',
    time: '11/2020 - 02/2021',
    abstract: `<p>Desenvolvimento e manutenção do sistema "Clipp Fácil", sistema voltado para a gestão de pequenas empresas.</p>`,    
  },
  {
    id: 3,
    occupation: 'Developer Frontend',
    company: '2b Digital',
    time: '03/2021 - 09/2021',
    abstract: `<p>Desenvolvimento e manutenção de ecommerce, usando vtex cms.</p>`,    
  },
  {
    id: 4,
    occupation: 'Developer Frontend',
    time: '09/2021 - atual',
    company: 'b8one',
    abstract: `<p>Desenvolvimento e manutenção de ecommerce, usando vtex cms e vtex io.</p>`,    
  }
];

experiences.reverse();

const education = [
  {
    id: 1,
    course: 'Técnico em informática',
    institution: 'Etec Piraju',
    abstract: `<p>Torna o profissional hábito em analisar e projetar sistemas. O profissional constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica (Java, Pascal, PHP). Modela, implementa e mantém bancos de dados.</p>`
  },
  {
    id: 2,
    course: 'Segurança da Informação',
    institution: 'Fatec Ourinhos',
    abstract: `<p>O tecnólogo em segurança da informação zela pela integridade e resguardo de informações das empresas, protegendo-as contra acessos não autorizados.</p><p>Assim, dentro dos princípios de confidencialidade, integridade e disponibilidade, esse profissional realiza análises de riscos, administra sistemas de informações, projeta e gerencia redes de computadores seguras, realiza auditorias, planeja contingências e recuperação em sinistros. Atua nos aspectos lógicos e físicos, controlando os níveis de acesso aos serviços dos sistemas operacionais, banco de dados e redes de computadores.</p>`
  },
];

education.reverse();

const courses = [
  {
    name: 'ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID',
    link: 'https://www.udemy.com/course/react-com-mango/',
    institution: 'Udemy',
    teacher: 'Rodrigo Manguinho'
  },
  {
    name: 'Ignite (trilha frontend)',
    link: 'https://www.rocketseat.com.br/',
    institution: 'Rocketseat',
    teacher: 'Diego Fernandes'
  },
  {
    name: 'Entendendo TypeScript',
    link: 'https://www.udemy.com/course/typescript-pt/',
    institution: 'Udemy',
    teacher: 'Leonardo Moura Leitão'
  },
  {
    name: 'Inglês',
    link: '#',
    institution: 'Particular',
    teacher: ''
  }
];


const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Portfolio | jesscoder</title>
        <meta name="description" content="Portfolio Jessica Medeiros" />        
      </Head>

      <main className={styles.main}>
        <section className={`${styles.wrapper} ${styles.wrapperSkills}` }>  
          {skills.map(skill =>        
              <Box title={skill.title} key={skill.title}>
                <Skills skills={skill.skills} />
              </Box>
          )}           
        </section>
        <section className={styles.wrapper}>             
              <Box title='Experience' key='Experience'>    
                {experiences.map(experience =>                 
                  <Experience key={experience.id} experience={experience}>
                    <div 
                     dangerouslySetInnerHTML={{
                      __html: experience.abstract,
                    }} />
                  </Experience>          
                )}           
                      
              </Box>                     
        </section>
        <section className={styles.wrapper}>             
              <Box title='Education' key='Education'>    
                {education.map(e =>                 
                  <Education key={e.id} education={e}>
                    <div 
                     dangerouslySetInnerHTML={{
                      __html: e.abstract,
                    }} />
                  </Education>          
                )}           
                      
              </Box>                     
        </section>
        <section className={`${styles.wrapper} ${styles.wrapperCourses}`}>             
              <Box title='Courses in progress' key='courses'>    
                <ul>
                  {courses.map(course =>                 
                    <li key={course.name}>
                      <p>
                        <span>{course.name} </span>
                        <small>
                           <a href={course.link}>{course.institution}</a> 
                          {course.teacher ? 
                            <small> ({course.teacher})</small>
                            : ''}
                        </small>
                      </p>
                    </li>        
                  )}   
                </ul>
              </Box>                     
        </section>
      </main>

      <footer className={styles.footer}>
        Feito por Jessica Medeiros 
      </footer>
    </div>
  )
}

export default Home
