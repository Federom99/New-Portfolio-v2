import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

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
  }
`;

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleTheme, theme }) => {
  return (
    <NavbarContainer>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certificates">Certificates</Link>
      </NavLinks>
      <ThemeSwitcher onClick={toggleTheme}>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </ThemeSwitcher>
    </NavbarContainer>
  );
};

export default Navbar;
