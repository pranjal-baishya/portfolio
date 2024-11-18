import React from "react"
import { Container, Typography, Paper, Box } from "@mui/material"
import styled from "styled-components"

const StyledPaper = styled(Paper)`
  padding: 2rem;
  margin: 2rem 0;
`

const AboutSection = styled.div`
  margin-bottom: 2rem;
`

const About: React.FC = () => {
  return (
    <Container>
      <Box py={4}>
        <Typography variant="h3" gutterBottom align="center">
          About Me
        </Typography>

        <StyledPaper elevation={3}>
          <AboutSection>
            <Typography variant="h5" gutterBottom>
              Who I Am
            </Typography>
            <Typography variant="body1">
              I am a passionate developer with expertise in modern web
              technologies. My journey in software development began [Your Story
              Here].
            </Typography>
          </AboutSection>

          <AboutSection>
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body1">
              • Frontend: React, TypeScript, Material-UI, Styled Components
              <br />
              • Backend: Node.js, Express, Python
              <br />
              • Database: MongoDB, PostgreSQL
              <br />• Tools: Git, Docker, AWS
            </Typography>
          </AboutSection>

          <AboutSection>
            <Typography variant="h5" gutterBottom>
              Experience
            </Typography>
            <Typography variant="body1">
              [Your work experience and achievements here]
            </Typography>
          </AboutSection>
        </StyledPaper>
      </Box>
    </Container>
  )
}

export default About
