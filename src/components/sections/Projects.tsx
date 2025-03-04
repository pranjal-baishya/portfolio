import { useState } from "react"
import styled from "styled-components"
import { projects } from "../../data/constants"
import ProjectCard from "../cards/ProjectCard"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 28px 0;
  max-width: 800px;
`

const FilterChip = styled.div<{ active?: boolean }>`
  padding: 8px 18px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  background: ${({ active, theme }) =>
    active ? theme.primary : "transparent"};
  color: ${({ active, theme }) => (active ? theme.white : theme.text_primary)};
  border: 1px solid
    ${({ active, theme }) =>
      active ? theme.primary : theme.text_secondary + "50"};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px ${({ theme }) => theme.primary + "50"};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`

const Projects = () => {
  const [toggle, setToggle] = useState("all")
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <FilterContainer>
          <FilterChip
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All Projects
          </FilterChip>
          <FilterChip
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            Web Apps
          </FilterChip>
          <FilterChip
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            Android Apps
          </FilterChip>
          <FilterChip
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            Machine Learning
          </FilterChip>
        </FilterContainer>

        <CardContainer>
          {toggle === "all"
            ? projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
