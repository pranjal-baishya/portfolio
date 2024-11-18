import React from "react"
import { Typography, Container } from "@mui/material"
import styled from "styled-components"

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #f5f5f5;
`

const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Showcasing my skills, projects, and experience.
        </Typography>
      </HeroSection>
    </Container>
  )
}

export default Home
