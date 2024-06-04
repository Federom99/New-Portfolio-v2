// src/components/AnimatedBackground.js
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
`;

const Ball = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.ballColor};
  border-radius: 50%;
  animation: ${bounce} 2s infinite ease-in-out;
`;

const AnimatedBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const AnimatedBackground = () => {
  const balls = Array.from({ length: 30 });

  return (
    <AnimatedBackgroundContainer>
      {balls.map((_, index) => (
        <Ball
          key={index}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </AnimatedBackgroundContainer>
  );
};

export default AnimatedBackground;
