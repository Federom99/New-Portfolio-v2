import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Footer from "./Footer";
import myImage from "../../src/images/1714505814025.jpeg";
import Typing from "react-typing-effect";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

const ImageContainer = styled(animated.div)`
  margin-top: 2rem;
  @media (max-width: 768px) {
    
    margin-right: 10px;

  }
`;

const Image = styled(animated.img)`
  width: 100%;
  max-width: 250px;
  border-radius: 50%;
`;

const DiagonalText = styled(animated.div)`
  margin-top: 2rem;
  padding: 15px;
  
  background: ${({ theme }) => theme.gradient};
  border-radius: 20px;
  max-width: 80%;
  text-align: center;
  @media (max-width: 768px) {
    
    margin-right: 10px;

  }
`;

const TypingHeader = styled.div`
  font-size: 2.5rem;
  margin-top: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  border-radius: 20px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-right: 50px;

  }
`;

const AnimatedIntroductionText = styled(animated.div)`
  margin-top: 2rem;
  padding: 15px;
  background: ${({ theme }) => theme.gradient};
  border-radius: 20px;
  max-width: 80%;
  text-align: center;
  @media (max-width: 768px) {
    
    margin-right: 10px;

  }
`;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  @media (max-width: 768px) {
    
    position: relative;
        
        right: 10px;

  }
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
        <Image src={myImage} alt="Federico Romero" />
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
