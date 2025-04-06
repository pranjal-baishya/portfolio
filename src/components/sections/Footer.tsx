import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

interface FooterProps {
  darkMode: boolean;
}

const FooterContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  background-image: ${({ darkMode }) => `url("https://capsule-render.vercel.app/api?type=waving&height=300&section=footer&color=0:${darkMode ? '141321' : 'C0C0C0'},100:${darkMode ? '4D71E5' : '87CEEB'}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: 400px;
  padding-top: 100px;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.a`
  font-family: 'Courier New', monospace;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '>';
    font-weight: bold;
    animation: blink 1.2s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  background-image: linear-gradient(90deg, ${({ theme }) => theme.primary}, #8a2be2);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: background-size 0.3s ease, color 0.2s ease-in-out;
  padding-bottom: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background-size: 100% 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}10, ${({ theme }) => theme.primary}50);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    
    &::before {
      transform: scale(1);
    }
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const BackToTopButton = styled.button<{ visible: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [showButton, setShowButton] = React.useState(false);

  // Show button when scrolled down
  React.useEffect(() => {
    const handleScroll = () => {
      // Show button when 400px from bottom of the page
      if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer darkMode={darkMode}>
      <FooterWrapper>
        <Logo href="#About">Pranjal Baishya</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2025 Pranjal Baishya. All rights reserved.</Copyright>
      </FooterWrapper>
      
      <BackToTopButton 
        onClick={scrollToTop} 
        visible={showButton}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </BackToTopButton>
    </FooterContainer>
  );
};

export default Footer;
