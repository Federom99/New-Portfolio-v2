import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import usFlag from "../../src/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png";
import esFlag from "../../src/images/sp-flag.jpg"

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 20px;
  margin-left: 30px;

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    color: ${({ theme }) => theme.linkHoverColor};

    }
  }
`;

const ThemeSwitcher = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  font-size: 2rem;
  margin-right: 15rem;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.linkHoverColor};

  }
`;

const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
  }
`;

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleTheme, theme }) => {

  const { language, toggleLanguage } = useLanguage();

 return (
    <NavbarContainer>
      <NavLinks>
        <Link to="/">{translations[language].home}</Link>
        <Link to="/skills">{translations[language].skills}</Link>
        <Link to="/projects">{translations[language].projects}</Link>
        <Link to="/certificates">{translations[language].certificates}</Link>
      </NavLinks>
      <FlagContainer>
        <FlagButton onClick={() => toggleLanguage('en')}>
          <img src={usFlag} alt="English" />
        </FlagButton>
        <FlagButton onClick={() => toggleLanguage('es')}>
          <img src={esFlag} alt="Español" />
        </FlagButton>
        <ThemeSwitcher onClick={toggleTheme}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </ThemeSwitcher>
      </FlagContainer>
    </NavbarContainer>
  );
};

export default Navbar;