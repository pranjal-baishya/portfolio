import React from "react"
import styled, { useTheme } from "styled-components"
import { Project } from "../../data/types"
import { createGlobalStyle } from "styled-components"

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.4) 0%,
      transparent 50%
    );
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${Card}:hover & {
    transform: scale(1.03);
    &:after {
      opacity: 1;
    }
  }
`
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`
const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 4px 10px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.primary + 30};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.primary + 30};
  }
`
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  
  /* Tech-style gradient text */
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.text_primary},
    ${({ theme }) => theme.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    background-position: right center;
  }
`
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
  
  &:before {
    content: '// ';
    color: ${({ theme }) => theme.primary};
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.5;
  position: relative;
  padding-left: 10px;
  border-left: 2px solid ${({ theme }) => theme.primary + 50};
`
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    border-color: ${({ theme }) => theme.primary};
    z-index: 10;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  position: relative;
  padding-top: 12px;
  
  /* Tech-inspired separator line */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg, 
      transparent, 
      ${({ theme }) => theme.primary + "50"}, 
      transparent
    );
  }
`
const Button = styled.a<{ primary?: boolean }>`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : "transparent"};
  border: 1.8px solid
    ${({ theme, primary }) => (primary ? "transparent" : theme.primary)};
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
  flex: 1;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  /* Tech-inspired gradient border for non-primary button */
  ${({ primary }) => !primary && `
    background: linear-gradient(to right, transparent, transparent) padding-box,
                linear-gradient(135deg, rgba(0,0,0,0), rgba(120,120,255,0.5)) border-box;
  `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    
    &:before {
      transform: translateX(100%);
      transition: transform 0.6s ease;
    }
  }
`

// Add an Icon wrapper for the button content
const ButtonIcon = styled.span`
  margin-right: 6px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: ${({ theme }) => theme.primary};
`

const ProjectCard = ({ project }: { project: Project }) => {
  const theme = useTheme()
  const cardRef = React.useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
  }
  
  const handleMouseEnter = () => {
    if (!cardRef.current) return
    cardRef.current.style.transition = 'transform 0.3s ease-out'
  }

  // Add a text typing effect for the title
  React.useEffect(() => {
    const titleElement = document.querySelector(`[data-project="${project.id}"] .project-title`);
    if (titleElement) {
      titleElement.classList.add('typing-animation');
    }
  }, [project.id]);

  return (
    <Card 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      data-project={project.id}
    >
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title className="project-title">{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {project.member && (
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
      )}
      <ButtonGroup>
        <Button
          href={project.github}
          target="_blank"
          style={{
            color: theme.text_primary,
            borderColor: theme.primary,
          }}
        >
          <ButtonIcon>{'<>'}</ButtonIcon>
          Code
        </Button>
        <Button
          primary
          href={project.webapp}
          target="_blank"
          style={{
            background: theme.primary,
            color: theme.text_primary,
          }}
        >
          <ButtonIcon>{'>_'}</ButtonIcon>
          Demo
        </Button>
      </ButtonGroup>
    </Card>
  )
}

// Add global styles for the typing animation
const GlobalStyle = createGlobalStyle`
  @keyframes typing-cursor {
    0%, 100% { border-color: transparent; }
    50% { border-color: ${({ theme }) => theme.primary}; }
  }
  
  .typing-animation {
    position: relative;
  }
  
  .typing-animation::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    height: 18px;
    width: 2px;
    background: ${({ theme }) => theme.primary};
    animation: typing-cursor 1s infinite;
    opacity: 0;
  }
  
  .card:hover .typing-animation::after {
    opacity: 1;
  }
`

export default ProjectCard
