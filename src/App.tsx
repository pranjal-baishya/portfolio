import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./utils/Themes"
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      setDarkMode(theme === "dark")
    } else {
      setDarkMode(true)
      localStorage.setItem("theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", darkMode ? "light" : "dark")
  }

  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? darkTheme.bg
      : lightTheme.bg
  }, [darkMode])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar theme={darkMode ? "dark" : "light"} toggleTheme={toggleTheme} />
        <Body>
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer darkMode={darkMode} />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
