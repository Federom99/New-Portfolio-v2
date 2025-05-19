import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  text-align: center;
  font-family: 'Quicksand', sans-serif;

`;

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor};
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterLink href="https://www.linkedin.com/in/federico-romero-full-stack-dev/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
        <FooterLink href="mailto:federo.15.99@gmail.com">Email</FooterLink>
        <FooterLink href="https://gitlab.com/federico.romero2" target="_blank" rel="noopener noreferrer">GitLab(Legacy)</FooterLink>
        <FooterLink href="https://github.com/Federom99" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
        <FooterLink href="https://gitlab.com/federicoagustin.romero" target="_blank" rel="noopener noreferrer">GitLab</FooterLink>
      </FooterSection>
      <CopyrightText>© 2024 Romero Federico. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
