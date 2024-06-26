import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import htmlIcon from "../images/html5.svg";
import cssIcon from "../images/css3.svg";
import reactIcon from "../images/react.svg";
import reduxIcon from "../images/redux.svg";
import javascriptIcon from "../images/javascript.svg";
import typescriptIcon from "../images/typescript-svgrepo-com.svg";
import postmanIcon from "../images/postman.svg";
import postgresqlIcon from "../images/postgresql.svg";
import nodeIcon from "../images/node-svgrepo-com.svg";
import awsIcon from "../images/aws-svgrepo-com.svg";
import communication from "../images/communication-5-svgrepo-com.svg";
import teamwork from "../images/team-svgrepo-com.svg";
import teamworkLight from "../images/team-svgrepo-com (1).svg";
import charisma from "../images/attract-svgrepo-com.svg";
import empaty from "../images/reconcile-help-empathy-forgive-svgrepo-com.svg";
import responsability from "../images/task-done-svgrepo-com.svg";
import responsabilityWhite from "../images/task-done-svgrepo-com (1).svg";
import problemSolving from "../images/problem-solving-skill-svgrepo-com.svg";
import problemSolvingWhite from "../images/problem-solving-skill-svgrepo-com (2).svg";
import adaptabilityWhite from "../images/change-svgrepo-com (1).svg";
import docker from "../images/docker-svgrepo-com.svg";
import scss from "../images/scss2-svgrepo-com.svg";
import serverless from "../images/serverless.png";
import adaptability from "../images/change-svgrepo-com.svg";
import charismDark from "../images/attract-svgrepo-com (1).svg";
import Footer from "./Footer";
import comunicationDark from "../images/communication-5-svgrepo-com (1).svg";
import empathyDark from "../images/reconcile-help-empathy-forgive-svgrepo-com (1).svg";
import { useTheme } from "styled-components";
import { useLanguage } from "./LanguageContext";

const SkillsContainer = styled(motion.div)`
  background-color: transparent;
  border-radius: 8px;
  font-family: "Quicksand", sans-serif;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Column = styled.div`
  flex-basis: calc(
    33.33% - 40px
  ); 
  margin: 0 20px;
  margin-bottom: 50px; 

  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    margin-left: 20px;
    cursor: pointer;
  }

  ul {
    padding: 0;
    font-size: 18px;
  }

  li {
    margin-bottom: 12px;
    cursor: pointer;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    flex-basis: calc(
      33.33% - 20px
    );
    margin-bottom: 0;
  }
`;

const ColumnText = styled.div`
  flex-basis: 88%; 
  margin-right: 30px;
  max-width: 800px; 
`;

const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  list-style: none;
`;

const SkillContent = styled.div`
  display: flex;
  align-items: center;
`;

const SkillIcon = styled.img`
  width: 28px;
  height: 28px;
  fill: ${({ theme }) => theme.text};
  filter: ${({ theme }) => (theme.mode === "light" ? "invert(1)" : "none")};
  margin-right: 10px;
`;

const SkillName = styled.span`
  margin-top: 4px;
`;

const SkillTooltip = styled(motion.div)`
  position: absolute;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  pointer-events: none;
`;

const ParagraphItem = styled(SkillItem)`
  background: ${({ theme }) => theme.gradient};
  border-radius: 20px;
  max-width: 500px;
  padding: 20px; 
  margin: 0 auto; 
  @media (min-width: 768px) {
    position: relative;
    left: 1100px;
    bottom: 750px;
  }
`;

const FooterContainer = styled.div`
  font-size: 1rem;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 55px;
    right: 60rem;
    font-size: 1.5rem;
  }
`;

const translations = {
  en: {
    frontend: "Frontend",
    backend: "Backend",
    softSkills: "Soft Skills",
    Communication: "Communication",
    Teamwork: "Teamwork",
    Charisma: "Charisma",
    Empathy: "Empathy",
    Responsibility: "Responsibility",
    Adaptability: "Adaptability",
    ProblemSolving: "Problem solving",
    paragraph1: (
      <div>
        <h4>How do I use my Frontend skills in my work?</h4>

        <p>
          JavaScript & TypeScript: Harnessing the power of both languages to
          build robust and scalable frontend solutions.
          <br />
          <br />
          React: Utilizing React for building modular and reusable components,
          ensuring a streamlined development process.
          <br />
          <br />
          Redux Saga: Employing Redux Saga for managing complex asynchronous
          logic, ensuring smooth data flow within the application.
          <br />
          <br />
          Sass: Utilizing Sass to streamline styling and maintain consistency
          across the application, enhancing the overall user experience.
          <br />
          <br />
          Jest: Leveraging Jest for unit testing, ensuring the reliability and
          stability of frontend components.
          <br />
          <br />
          Axios: Integrating Axios for efficient handling of HTTP requests,
          facilitating seamless communication with backend services.
          <br />
          <br />
          Chart.js: Implementing Chart.js to visualize data and insights,
          enhancing the presentation of information for users.
          <br />
          <br />
          Lodash: Leveraging Lodash for utility functions and data manipulation,
          optimizing frontend code efficiency.
        </p>
      </div>
    ),
    paragraph2: (
      <div>
        <h4>How do I use my Backend skills in my work?</h4>

        <p>
          On the backend side, I delve into a robust stack of technologies and
          tools to power our services and ensure seamless functionality. Here is
          a breakdown:
          <br />
          <br />
          JavaScript & Node.js: Leveraging the versatility of Node.js and
          JavaScript for building scalable and performant backend services.
          <br />
          <br />
          Express.js: Utilizing Express.js for developing efficient and modular
          server-side applications, facilitating rapid development.
          <br />
          <br />
          Docker: Embracing Docker for containerization, enabling seamless
          deployment and scaling of backend services across different
          environments.
          <br />
          <br />
          PostgreSQL: Leveraging PostgreSQL for data storage and management,
          ensuring reliability and data integrity.
          <br />
          <br />
          AWS: Harnessing the power of Amazon Web Services (AWS) for cloud
          infrastructure and services, enabling scalable and resilient backend
          architecture.
          <br />
          <br />
          Serverless: Implementing serverless architecture to optimize resource
          utilization and streamline backend operations, enhancing scalability
          and cost-efficiency
        </p>
      </div>
    ),
    paragraph3: (
      <div>
        <h4>How do I use my Soft Skills in my work?</h4>

        <p>
          Communication: In my work, I use strong communication skills to
          clearly express my ideas and opinions in meetings, emails, and
          presentations. Additionally, I am always attentive to the needs of my
          colleagues and clients, ensuring I understand their perspectives and
          communicate effectively to achieve our common goals.
          <br />
          <br />
          Teamwork: I am an active member and collaborator in work teams,
          sharing my knowledge and skills to contribute to the success of the
          project. I am open to hearing the ideas of my colleagues and am
          committed to working together to overcome any challenges that arise.
          <br />
          <br />
          Charisma: My positive presence and my ability to connect with others
          allow me to build strong relationships in the work environment. I
          always seek to positively influence my colleagues and clients,
          generating trust and motivation in our work together.
          <br />
          <br />
          Empathy: I strive to understand the perspectives and feelings of my
          colleagues and clients, allowing me to approach situations from a
          place of understanding and respect.
          <br />
          <br />
          Responsibility: I am aware of the importance of fulfilling my
          responsibilities and commitments at work. I always meet established
          deadlines and take responsibility for my actions, maintaining the
          confidence of my colleagues and superiors in my ability to meet job
          expectations.
        </p>
      </div>
    ),
    // Otros textos para traducir
  },
  es: {
    frontend: "Frontend",
    backend: "Backend",
    softSkills: "Habilidades Blandas",
    Communication: "Comunicación",
    Teamwork: "Trabajo en equipo",
    Charisma: "Carisma",
    Empathy: "Empatía",
    Responsibility: "Responsabilidad",
    Adaptability: "Adaptabilidad",
    ProblemSolving: "Resolución de problemas",
    paragraph1: (
      <div>
        <h4>¿Cómo utilizo mis habilidades de Frontend en mi trabajo?</h4>

        <p>
          JavaScript y TypeScript: aprovechando el poder de ambos lenguajes para
          construir soluciones frontend robustas y escalables.
          <br />
          <br />
          React: utilizando React para construir componentes modulares y
          reutilizables, asegurando un proceso de desarrollo ágil.
          <br />
          <br />
          Redux Saga: empleando Redux Saga para gestionar lógica asincrónica
          compleja, asegurando un flujo de datos fluido dentro de la aplicación.
          <br />
          <br />
          Sass: utilizando Sass para estilizar y mantener la consistencia en
          toda la aplicación, mejorando la experiencia general del usuario.
          <br />
          <br />
          Jest: aprovechando Jest para pruebas unitarias, asegurando la
          confiabilidad y estabilidad de los componentes frontend.
          <br />
          <br />
          Axios: integrando Axios para manejar eficientemente las solicitudes
          HTTP, facilitando la comunicación fluida con los servicios backend.
          <br />
          <br />
          Chart.js: implementando Chart.js para visualizar datos e ideas,
          mejorando la presentación de información para los usuarios.
          <br />
          <br />
          Lodash: aprovechando Lodash para funciones de utilidad y manipulación
          de datos, optimizando la eficiencia del código frontend.
        </p>
      </div>
    ),
    paragraph2: (
      <div>
        <h4>¿Cómo utilizo mis habilidades de Backend en mi trabajo?</h4>

        <p>
          En el lado del backend, profundizo en un conjunto robusto de
          tecnologías y herramientas para impulsar nuestros servicios y
          garantizar una funcionalidad perfecta. Aquí está un desglose:
          <br />
          <br />
          JavaScript y Node.js: aprovechando la versatilidad de Node.js y
          JavaScript para construir servicios backend escalables y eficientes.
          <br />
          <br />
          Express.js: utilizando Express.js para desarrollar aplicaciones de
          servidor eficientes y modulares, facilitando el desarrollo rápido.
          <br />
          <br />
          Docker: abrazando Docker para la contenerización, permitiendo una
          implementación perfecta y escalado de servicios backend en diferentes
          entornos.
          <br />
          <br />
          PostgreSQL: aprovechando PostgreSQL para el almacenamiento y gestión
          de datos, garantizando confiabilidad e integridad de datos.
          <br />
          <br />
          AWS: aprovechando el poder de Amazon Web Services (AWS) para
          infraestructura y servicios en la nube, permitiendo una arquitectura
          backend escalable y resiliente.
          <br />
          <br />
          Serverless: implementando arquitectura serverless para optimizar la
          utilización de recursos y simplificar las operaciones del backend,
          mejorando la escalabilidad y eficiencia en costos.
        </p>
      </div>
    ),
    paragraph3: (
      <div>
        <h4>¿Cómo utilizo mis habilidades blandas en mi trabajo?</h4>

        <p>
          Comunicación: En mi trabajo, utilizo habilidades de comunicación
          fuertes para expresar claramente mis ideas y opiniones en reuniones,
          correos electrónicos y presentaciones. Además, siempre estoy atento a
          las necesidades de mis colegas y clientes, asegurándome de entender
          sus perspectivas y comunicarme eficazmente para lograr nuestros
          objetivos comunes.
          <br />
          <br />
          Trabajo en equipo: Soy un miembro activo y colaborador en equipos de
          trabajo, compartiendo mi conocimiento y habilidades para contribuir al
          éxito del proyecto. Yo estoy abierto a escuchar las ideas de mis
          colegas y estoy comprometido a trabajar juntos para superar cualquier
          desafío que surja.
          <br />
          <br />
          Carisma: Mi presencia positiva y mi capacidad para conectar con los
          demás me permiten construir relaciones sólidas en el entorno laboral.
          Siempre busco influir positivamente en mis colegas y clientes,
          generando confianza y motivación en nuestro trabajo conjunto.
          <br />
          <br />
          Empatía: Me esfuerzo por comprender las perspectivas y sentimientos de
          mis colegas y clientes, lo que me permite abordar situaciones desde un
          lugar de comprensión y respeto.
          <br />
          <br />
          Responsabilidad: Soy consciente de la importancia de cumplir con mis
          responsabilidades y compromisos en el trabajo. Siempre cumplo con los
          plazos establecidos y asumo la responsabilidad de mis acciones,
          manteniendo la confianza de mis colegas y superiores en mi capacidad
          para cumplir con las expectativas laborales.
        </p>
      </div>
    ),
    // Otros textos para traducir
  },
  // Agrega más traducciones según sea necesario
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const controls = useAnimation();
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const { language } = useLanguage();

  const theme = useTheme();
  console.log(theme, "theme");

  const paragraphs = [
    // eslint-disable-next-line react/jsx-key
    <div>
      <h4>How do I use my Frontend skills in my work?</h4>

      <p>
        JavaScript & TypeScript: Harnessing the power of both languages to build
        robust and scalable frontend solutions.
        <br></br>
        <br></br>
        React: Utilizing React for building modular and reusable components,
        ensuring a streamlined development process.
        <br></br>
        <br></br>
        Redux Saga: Employing Redux Saga for managing complex asynchronous
        logic, ensuring smooth data flow within the application.
        <br></br>
        <br></br>
        Sass: Utilizing Sass to streamline styling and maintain consistency
        across the application, enhancing the overall user experience.
        <br></br>
        <br></br>
        Jest: Leveraging Jest for unit testing, ensuring the reliability and
        stability of frontend components.
        <br></br>
        <br></br>
        Axios: Integrating Axios for efficient handling of HTTP requests,
        facilitating seamless communication with backend services.
        <br></br>
        <br></br>
        Chart.js: Implementing Chart.js to visualize data and insights,
        enhancing the presentation of information for users.
        <br></br>
        <br></br>
        Lodash: Leveraging Lodash for utility functions and data manipulation,
        optimizing frontend code efficiency.
      </p>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div>
      <h4>How do I use my Backend skills in my work?</h4>

      <p>
        On the backend side, I delve into a robust stack of technologies and
        tools to power our services and ensure seamless functionality. Here is a
        breakdown:
        <br></br>
        <br></br>
        JavaScript & Node.js: Leveraging the versatility of Node.js and
        JavaScript for building scalable and performant backend services.
        <br></br>
        <br></br>
        Express.js: Utilizing Express.js for developing efficient and modular
        server-side applications, facilitating rapid development.
        <br></br>
        <br></br>
        Docker: Embracing Docker for containerization, enabling seamless
        deployment and scaling of backend services across different
        environments.
        <br></br>
        <br></br>
        PostgreSQL: Leveraging PostgreSQL for data storage and management,
        ensuring reliability and data integrity.
        <br></br>
        <br></br>
        AWS: Harnessing the power of Amazon Web Services (AWS) for cloud
        infrastructure and services, enabling scalable and resilient backend
        architecture.
        <br></br>
        <br></br>
        Serverless: Implementing serverless architecture to optimize resource
        utilization and streamline backend operations, enhancing scalability and
        cost-efficiency
      </p>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div>
      <h4>How do I use my Soft Skills in my work?</h4>

      <p>
        Communication: In my work, I use strong communication skills to clearly
        express my ideas and opinions in meetings, emails, and presentations.
        Additionally, I am always attentive to the needs of my colleagues and
        clients, ensuring I understand their perspectives and communicate
        effectively to achieve our common goals.
        <br></br>
        <br></br>
        Teamwork: I am an active member and collaborator in work teams, sharing
        my knowledge and skills to contribute to the success of the project. I
        am open to hearing the ideas of my colleagues and am committed to
        working together to overcome any challenges that arise.
        <br></br>
        <br></br>
        Charisma: My positive presence and my ability to connect with others
        allow me to build strong relationships in the work environment. I always
        seek to positively influence my colleagues and clients, generating trust
        and motivation in our work together.
        <br></br>
        <br></br>
        Empathy: I strive to understand the perspectives and feelings of my
        colleagues and clients, allowing me to approach situations from a place
        of understanding and respect.
        <br></br>
        <br></br>
        Responsibility: I am aware of the importance of fulfilling my
        responsibilities and commitments at work. I always meet established
        deadlines and take responsibility for my actions, maintaining the
        confidence of my colleagues and superiors in my ability to meet job
        expectations.
      </p>
    </div>,
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentParagraph < paragraphs.length - 1) {
        setCurrentParagraph(currentParagraph + 1);
      } else {
        setCurrentParagraph(0);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentParagraph, paragraphs.length]);

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };

  const frontendSkills = [
    {
      name: "HTML",
      imgSrc: htmlIcon,
    },
    {
      name: "CSS",
      imgSrc: cssIcon,
    },
    {
      name: "Sass",
      imgSrc: scss,
    },
    {
      name: "React",
      imgSrc: reactIcon,
    },
    {
      name: "Redux",
      imgSrc: reduxIcon,
    },
    {
      name: "JavaScript",
      imgSrc: javascriptIcon,
    },
    {
      name: "TypeScript",
      imgSrc: typescriptIcon,
    },
  ];

  const backendSkills = [
    {
      name: "JavaScript",
      imgSrc: javascriptIcon,
    },
    {
      name: "Postman",
      imgSrc: postmanIcon,
    },
    {
      name: "PostgreSQL",
      imgSrc: postgresqlIcon,
    },
    {
      name: "Node.js",
      imgSrc: nodeIcon,
    },
    {
      name: "AWS",
      imgSrc: awsIcon,
    },
    {
      name: "Docker",
      imgSrc: docker,
    },
    {
      name: "Serverless",
      imgSrc: serverless,
    },
  ];

  const softSkills = [
    {
      name: "Communication",
      imgSrc: theme.background === "#ffffff" ? comunicationDark : communication,
    },
    {
      name: "Teamwork",
      imgSrc: theme.background === "#ffffff" ? teamwork : teamworkLight,
    },
    {
      name: "Charisma",
      imgSrc: theme.background === "#ffffff" ? charismDark : charisma,
    },
    {
      name: "Empathy",
      imgSrc: theme.background === "#ffffff" ? empathyDark : empaty,
    },
    {
      name: "Responsibility",
      imgSrc:
        theme.background === "#ffffff" ? responsability : responsabilityWhite,
    },
    {
      name: "Adaptability",
      imgSrc: theme.background === "#ffffff" ? adaptability : adaptabilityWhite,
    },
    {
      name: "ProblemSolving",
      imgSrc:
        theme.background === "#ffffff" ? problemSolving : problemSolvingWhite,
    },
  ];

  return (
    <>
      <SkillsContainer
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <SkillsWrapper>
          <Column>
            <h3>{translations[language].frontend}</h3>

            <ul>
              {frontendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  onMouseLeave={() => handleSkillHover(null)}
                >
                  <SkillContent>
                    {skill.imgSrc && (
                      <SkillIcon src={skill.imgSrc} alt={skill.name} />
                    )}
                    <SkillName>{skill.name}</SkillName>
                  </SkillContent>
                </SkillItem>
              ))}
            </ul>
          </Column>
          <Column>
            <h3>{translations[language].backend}</h3>
            <ul>
              {backendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  onMouseLeave={() => handleSkillHover(null)}
                >
                  <SkillContent>
                    {skill.imgSrc && (
                      <SkillIcon src={skill.imgSrc} alt={skill.name} />
                    )}
                    <SkillName>{skill.name}</SkillName>
                  </SkillContent>
                </SkillItem>
              ))}
            </ul>
          </Column>
          <Column>
            <h3>{translations[language].softSkills}</h3>

            <ul>
              {softSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  onMouseLeave={() => handleSkillHover(null)}
                >
                  <SkillContent>
                    {skill.imgSrc && (
                      <SkillIcon src={skill.imgSrc} alt={skill.name} />
                    )}
                    <SkillName>{translations[language][skill.name]}</SkillName>
                  </SkillContent>
                </SkillItem>
              ))}
            </ul>
          </Column>
          <ColumnText>
            <ul>
              <ParagraphItem>
                <SkillContent>
                  <SkillName>
                    {translations[language][`paragraph${currentParagraph + 1}`]}
                  </SkillName>
                </SkillContent>
              </ParagraphItem>
            </ul>
          </ColumnText>
        </SkillsWrapper>
        {hoveredSkill && (
          <SkillTooltip
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {hoveredSkill}
          </SkillTooltip>
        )}
      </SkillsContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default Skills;
