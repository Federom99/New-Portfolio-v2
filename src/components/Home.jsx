import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Footer from "./Footer";
import myImage from "../../src/images/1714505814025.jpeg";
import Typing from "react-typing-effect";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

const HomeContainer = styled.div`
  display: flex;
  font-family: "Quicksand", sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  text-align: center;
`;

const ImageContainer = styled(animated.div)`
  position: relative;
  left: 1000px;
  bottom: 350px;
`;

const Image = styled(animated.img)`
  width: 250px;
  border-radius: 50%;
`;

const FooterContainer = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 20px;
  font-size: 1.5rem;
`;

const DiagonalText = styled(animated.div)`
  font-size: 1.3rem;
  max-width: 500px;
  position: absolute;
  bottom: 70px;
  right: 140px;
  background: ${({ theme }) => theme.gradient};
  border-radius: 20px;
`;

const TypingHeader = styled.div`
  font-size: 2.5rem;
  position: relative;
  bottom: 100px;
  right: 120px;
  text-align: left;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  border-radius: 20px;
`;

const AnimatedIntroductionText = styled(animated.div)`
  font-size: 1.3rem;
  text-align: left;
  border-radius: 20px;
  background: ${({ theme }) => theme.gradient};
`;

const Home = () => {
  const { language } = useLanguage(); 
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const imageProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <HomeContainer>
      <TypingHeader>
        <Typing
          text={[translations[language].greeting]}
          speed={70}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          loop={true}
        />
      </TypingHeader>
      <br />
      <TypingHeader>
        <Typing
          text={[translations[language].role]}
          speed={70}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          loop={true}
        />
      </TypingHeader>
      
      <AnimatedIntroductionText style={props}>
        {translations[language].introduction.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </AnimatedIntroductionText>

      <ImageContainer style={imageProps}>
        <Image src={myImage} alt="Federico Romero" />{" "}
      </ImageContainer>

      <DiagonalText style={props}>
        {translations[language].diagonalText}
      </DiagonalText>

      <FooterContainer style={props}>
        <Footer />
      </FooterContainer>
    </HomeContainer>
  );
};

export default Home;
