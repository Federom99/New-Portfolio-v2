import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Footer from "./Footer";
import myImage from "../../src/images/1714505814025.jpeg";
import Typing from "react-typing-effect";

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
          text={["Hello, I'm Federico Romero!"]}
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
          text={["FullStack Software Engineer."]}
          speed={70}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          loop={true}
        />
      </TypingHeader>
      
      <AnimatedIntroductionText style={props}>
        <p>
          At 24 years old, I am constantly looking for opportunities to grow and
          learn in the world of technology.
        </p>
        <p>My approach at work is based on organization and responsibility.</p>
        <p>
          I am passionate about teamwork and adapt quickly to any situation.
        </p>
        <p>
          I have a C1 level of English and I am determined to perfect it even
          further.
        </p>
      </AnimatedIntroductionText>

      <ImageContainer style={imageProps}>
        <Image src={myImage} alt="Federico Romero" />{" "}
      </ImageContainer>

      <DiagonalText style={props}>
        In this portfolio, you can learn more about me. My technical and soft
        skills. My projects, my certifications. You can also choose between a
        light or dark theme. And you can translate to English or Spanish. You
        can also check my contributions in GitLab or GitHub. And you can contact
        me on LinkedIn or by Email. I am open to new opportunities and
        challenges. Do not hesitate to contact me!
      </DiagonalText>

      <FooterContainer style={props}>
        <Footer />
      </FooterContainer>
    </HomeContainer>
  );
};

export default Home;
