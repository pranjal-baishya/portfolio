import React, { useState, useEffect } from "react"
import styled, { useTheme } from "styled-components"
import { Bio } from "../data/constants"
import { MenuRounded, CloseRounded } from "@mui/icons-material"
import ThemeToggle from "./ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.primary}50,
      transparent
    );
  }

  &:hover::before {
    opacity: 1;
    animation: gradientSlide 2s infinite;
  }

  @keyframes gradientSlide {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`
const NavLogo = styled.h1`
  width: auto;
  padding: 0 6px;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  overflow: visible;
  display: inline-block;

  span {
    display: inline-block;
    transition: transform 0.3s, opacity 0.3s;
  }

  &::before {
    content: "<pb/>";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.primary};
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s, opacity 0.3s;
    font-family: monospace;
  }

  &:hover span {
    opacity: 0;
    transform: translateY(100%);
  }

  &:hover::before {
    opacity: 1;
    transform: translateY(0);
  }
`

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding: 0 4px;

  /* Code-inspired underline effect */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s cubic-bezier(0.73, 0.29, 0, 0.99);
    opacity: 0.8;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const ActiveNavLink = styled(NavLink)`
  &::after {
    width: 100%;
    opacity: 1;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.primary}90
    );
  }
`

const ButtonContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: "Roboto Mono", monospace;

  &::before {
    content: "{ ";
    margin-right: 5px;
    opacity: 0.7;
    width: 10px;
    display: inline-block;
  }

  &::after {
    content: " }";
    margin-left: 5px;
    opacity: 0.7;
    width: 10px;
    display: inline-block;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primary}90;
    box-shadow: 0 0 10px ${({ theme }) => theme.primary}80;
    transform: translateY(-2px);
  }

  &:hover::before {
    content: "<";
  }

  &:hover::after {
    content: "/>";
  }
`

const MobileIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  margin-left: auto;
  padding: 6px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primary}15;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const MobileMenu = styled(motion.ul)<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  /* Terminal-like border effect */
  border-left: 1px solid ${({ theme }) => theme.primary}50;
  border-right: 1px solid ${({ theme }) => theme.primary}50;
  border-bottom: 1px solid ${({ theme }) => theme.primary}50;
`

// Add a new styled component for mobile theme toggle
const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const Navbar = ({
  theme,
  toggleTheme,
}: {
  theme: any
  toggleTheme: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("About")
  const themeObj = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Education",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderNavLink = (section: string, index: number) => {
    const isActive = section === activeSection
    const LinkComponent = isActive ? ActiveNavLink : NavLink

    return (
      <motion.li
        key={section}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1 * index,
          type: "spring",
          stiffness: 100,
        }}
        style={{ display: "inline-block" }}
      >
        <LinkComponent href={`#${section}`}>{section}</LinkComponent>
      </motion.li>
    )
  }

  const renderMobileNavLink = (section: string, index: number) => {
    const isActive = section === activeSection
    const LinkComponent = isActive ? ActiveNavLink : NavLink

    return (
      <motion.li
        key={section}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.05 * index,
          type: "spring",
        }}
        style={{ display: "block", width: "100%" }}
      >
        <LinkComponent onClick={() => setIsOpen(false)} href={`#${section}`}>
          {section}
        </LinkComponent>
      </motion.li>
    )
  }

  const sections = ["About", "Skills", "Experience", "Projects", "Education"]

  return (
    <Nav>
      <NavbarContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: "inline-block", flexShrink: 0 }}
        >
          <NavLogo>
            <span>PB</span>
          </NavLogo>
        </motion.div>

        <NavItems>
          {sections.map((section, index) => renderNavLink(section, index))}
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.1 * sections.length,
              type: "spring",
            }}
            style={{ display: "inline-block" }}
          >
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.li>
        </NavItems>

        <MobileControls>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.div>

          <motion.div whileHover={{ scale: .9 }} whileTap={{ scale: 0.8 }}>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 90 }}
                    exit={{ opacity: 0, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CloseRounded style={{ color: themeObj.primary, display:"flex" }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MenuRounded style={{ color: "inherit", display:"flex" }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </MobileIcon>
          </motion.div>
        </MobileControls>

        <ButtonContainer>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              type: "spring",
            }}
            style={{ display: "inline-block", flexShrink: 0 }}
          >
            <GithubButton href={Bio.github} target="_Blank">
              Github Profile
            </GithubButton>
          </motion.div>
        </ButtonContainer>

        <AnimatePresence mode="wait">
          {isOpen && (
            <MobileMenu
              isOpen={isOpen}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {sections.map((section, index) =>
                renderMobileNavLink(section, index)
              )}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.05 * (sections.length + 1),
                  type: "spring",
                }}
                style={{ display: "block", width: "100%" }}
              >
                <GithubButton
                  href={Bio.github}
                  target="_Blank"
                  style={{
                    background: themeObj.primary,
                    color: themeObj.text_primary,
                  }}
                >
                  Github Profile
                </GithubButton>
              </motion.li>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
