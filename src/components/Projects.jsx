import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: "Quicksand", sans-serif;
`;

const ProjectCard = styled(motion.div)`
  width: 300px;
  height: 335px;
  padding: 20px;
  margin: 20px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  position: relative;
  bottom: 20px;
  color: ${({ theme }) => theme.text};
  flex-grow: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
    color: ${({ theme }) => theme.buttonTextHover};
  }
`;

const Projects = () => {
  const controls = useAnimation();
  const { language } = useLanguage();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const projects = {
    en: [
      {
        title: "E-commerce",
        description:
          "This project is about an E-Commerce. We were 8 members working on it. Where we incorporate new things. It was a rewarding challenge, where we also implemented agile work methodologies. We successfully approved it to be able to complete the bootcamp stage.",
        repoLink: "https://github.com/Federom99/E-Commerce",
        demoLink: "https://pro-ropa-store.vercel.app/",
      },
      {
        title: "Shoppingfly",
        description:
          "This project was a integration project. Here the backend, frontend and the database were combined. It was a devchallenges.io challenge. It's like buying things in the supermarket but online.",
        repoLink: "https://github.com/Federom99/Shoppingify",
        demoLink:
          "https://www.linkedin.com/posts/federico-romero-full-stack-dev_red-react-redux-activity-6967517217227747328-QFHe/?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "SPA Project",
        description:
          "This project was a bootcamp integration project where we had to do it with everything we learned. It was a truly rewarding challenge, I really enjoyed it. Where I was able to apply for the first time everything I learned.",
        repoLink: "https://github.com/Federom99/PI---VideoGames",
        demoLink: "https://github.com/Federom99/PI---VideoGames",
      },
      {
        title: "Country Quizz",
        description:
          "This application is a country quiz in which the questions change randomly. They are questions related to the capitals of the different countries of the world. I had the idea to do it from devchallenges.io.",
        repoLink: "https://countryapp-rf.netlify.app/",
        demoLink: "https://countryapp-rf.netlify.app/",
      },
      {
        title: "Crypto Coins",
        description:
          "This was one of my first projects and technical tests. It was my first time using angular and typescript. The application is based on showing the most recognized cryptocurrencies of the moment.",
        repoLink: "https://github.com/Federom99/App-coins",
        demoLink:
          "https://www.linkedin.com/posts/federico-romero-full-stack-dev_red-desarrollador-angular-activity-6949887365234446337-f72Q/?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Lua Press on Nails",
        description:
          "This project was for a nail entrepreneur. Which wanted its website so that its clients can see the services and forms of contact that it offers. Here you can see the nails that she made, information to how to measure your nails, and the ways to contact her. ",
        repoLink: "https://lua-press-on-nails.netlify.app/",
        demoLink: "https://lua-press-on-nails.netlify.app/",
      },
      {
        title: "Weather-App",
        description:
          "This is a small and typical weather application. Where you can place any country code, the name of the  city and it will give you the result in real time. Indicating extra things like the humidity, the wind speed, preassure, temperature etc.",
        repoLink: "https://github.com/Federom99/App-Weather",
        demoLink: "https://app-weather-rf.netlify.app/",
      },
      {
        title: "Greengrocery-App",
        description:
          "This project was for a local business. Where people can make their purchases online, adding products to the cart. Be it per kilogram, unit, drawer/bag, etc. To then place the order, and it is automatically redirected to WhatsApp to send the message to the business.",
        repoLink: "https://github.com/Federom99/verduleria",
        demoLink: "https://la-verduleria.vercel.app/",
      },
    ],
    es: [
      {
        title: "E-commerce",
        description:
          "Este proyecto trata sobre un E-Commerce. Éramos 8 miembros trabajando en él. Donde incorporamos cosas nuevas. Fue un desafío gratificante, donde también implementamos metodologías de trabajo ágiles. Lo aprobamos con éxito para poder completar la etapa del bootcamp.",
        repoLink: "https://github.com/Federom99/E-Commerce",
        demoLink: "https://pro-ropa-store.vercel.app/",
      },
      {
        title: "Shoppingfly",
        description:
          "Este proyecto fue un proyecto de integración. Aquí se combinó el backend, el frontend y la base de datos. Fue un desafío devchallenges.io. Es como comprar cosas en el supermercado pero online.",
        repoLink: "https://github.com/Federom99/Shoppingify",
        demoLink:
          "https://www.linkedin.com/posts/federico-romero-full-stack-dev_red-react-redux-activity-6967517217227747328-QFHe/?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "SPA Project",
        description:
          "Este proyecto fue un proyecto de integración de bootcamp donde tuvimos que hacerlo con todo lo que aprendimos. Fue un desafío realmente gratificante, lo disfruté mucho. Donde pude aplicar por primera vez todo lo que aprendí.",
        repoLink: "https://github.com/Federom99/PI---VideoGames",
        demoLink: "https://github.com/Federom99/PI---VideoGames",
      },
      {
        title: "Country Quizz",
        description:
          "Esta aplicación es un cuestionario de países en el que las preguntas cambian aleatoriamente. Son preguntas relacionadas con las capitales de los diferentes países del mundo. Tuve la idea de hacerlo desde devchallenges.io.",
        repoLink: "https://countryapp-rf.netlify.app/",
        demoLink: "https://countryapp-rf.netlify.app/",
      },
      {
        title: "Crypto Coins",
        description:
          "Este fue uno de mis primeros proyectos y pruebas técnicas. Fue la primera vez que usé angular y mecanografiado. La aplicación se basa en mostrar las criptomonedas más reconocidas del momento.",
        repoLink: "https://github.com/Federom99/App-coins",
        demoLink:
          "https://www.linkedin.com/posts/federico-romero-full-stack-dev_red-desarrollador-angular-activity-6949887365234446337-f72Q/?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Lua Press on Nails",
        description:
          "Este proyecto fue para una emprendedora de uñas. La cual quería su sitio web para que sus clientes pudieran ver los servicios y formas de contacto que ofrece. Aquí puedes ver las uñas que ella hizo, información sobre cómo medir tus uñas y las formas. para contactarla ",
        repoLink: "https://lua-press-on-nails.netlify.app/",
        demoLink: "https://lua-press-on-nails.netlify.app/",
      },
      {
        title: "Weather-App",
        description:
          "Esta es una pequeña y típica aplicación meteorológica. Donde puedes colocar cualquier código de país, el nombre de la ciudad y te dará el resultado en tiempo real. Indicando cosas extra como la humedad, la velocidad del viento, la presión, la temperatura, etc. ",
        repoLink: "https://github.com/Federom99/App-Weather",
        demoLink: "https://app-weather-rf.netlify.app/",
      },
      {
        title: "Greengrocery-App",
        description:
          "Este proyecto era para un negocio local. Donde las personas pueden realizar sus compras online, agregando productos al carrito. Ya sea por kilogramo, unidad, cajón/bolsa, etc. Para luego realizar el pedido, y automáticamente se redirige a WhatsApp para envía el mensaje a la empresa.",
        repoLink: "https://github.com/Federom99/verduleria",
        demoLink: "https://la-verduleria.vercel.app/",
      },
      // Otros proyectos en español aquí
    ],
  };

  const currentProjects = projects[language] || [];

  return (
    <>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto",
          fontFamily: "'Quicksand', sans-serif",
          fontSize: "1.3rem",
        }}
      >
        {language === "en"
          ? "Here you can see my projects. In each of them it was to continue improving my technical skills. Some were for the bootcamp and others were personal projects. Also, you can see the code by accessing the repo, or else a demonstration of what the project is about."
          : "Aquí puedes ver mis proyectos. En cada uno de ellos fue para seguir mejorando mis habilidades técnicas. Algunos fueron para el bootcamp y otros fueron proyectos personales. Además, puedes ver el código accediendo al repositorio, o bien una demostración de qué se trata el proyecto."}
      </p>

      <ProjectsContainer>
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            whileHover={{ scale: 1.05 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ButtonContainer>
              <Button onClick={() => window.open(project.repoLink, "_blank")}>
                Repo
              </Button>
              <Button onClick={() => window.open(project.demoLink, "_blank")}>
                Demo
              </Button>
            </ButtonContainer>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
