import { useState } from 'react'; // Importa el hook useState
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Agrega el ícono para el menú de hamburguesa
import { useLanguage } from './LanguageContext';
import translations from './translations';
import usFlag from '../../src/images/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png';
import esFlag from '../../src/images/sp-flag.jpg';

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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; // Oculta los enlaces si isOpen es falso
    flex-direction: column;
    gap: 1rem;
    font-size: 20px;
    position: absolute;
    top: 80px;
    left: -28px;
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.accent};
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    font-size: 15px;
    gap: 1.1rem;
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
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 5rem;
  }

  @media (max-width: 480px) {
    left: 20px;
    font-size: 2rem;
    position: relative;
    top: 5px;
  }
`;

const FlagContainer = styled.div`
  display: flex;
  top: 5px;
  align-items: center;
  gap: 1rem;
  left: 20px;
    position: relative;
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

const MenuIcon = styled(FontAwesomeIcon)`
  display: none; // Por defecto, el ícono de menú está oculto en pantallas grandes

  @media (max-width: 768px) {
    display: block; // Se muestra solo en dispositivos móviles
    font-size: 2rem;
    cursor: pointer;
    margin-right: 1rem;
  }
`;

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleTheme, theme }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <MenuIcon icon={isOpen ? faTimes : faBars} onClick={toggleMenu} /> {/* Cambia el ícono según si el menú está abierto o cerrado */}
      <NavLinks isOpen={isOpen}  onClick={closeMenu}>  {/* Pasa el estado isOpen al componente NavLinks */}
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
      </FlagContainer>
      <ThemeSwitcher onClick={toggleTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </ThemeSwitcher>
    </NavbarContainer>
  );
};

export default Navbar;
