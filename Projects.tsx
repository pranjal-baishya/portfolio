import React from "react"
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../graphql/queries"
import { Container, Typography, Box } from "@mui/material"
import ProjectCard from "../components/ProjectCard"
import styled from "styled-components"

const ProjectsHeader = styled.div`
  text-align: center;
  padding: 2rem 0;
`

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>Error: {error.message}</Typography>

  return (
    <Container>
      <ProjectsHeader>
        <Typography variant="h3" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Here are some of the projects I've worked on
        </Typography>
      </ProjectsHeader>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {data.getProjects.map((project: any, index: number) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.333% - 16px)",
              },
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Projects
