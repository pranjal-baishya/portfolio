import { useState } from "react"
import styled from "styled-components"
import { Project } from "../../data/types"

const Card = styled.div`
  width: 330px;
  height: 490px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`

const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "rotateY(0)")};
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;

  &:hover .button-overlay {
    opacity: 1;
  }
`

const ButtonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, transparent 50%);
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
const StyledDate = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  font-family: "Courier New", monospace;
  letter-spacing: 0.5px;

  &:before {
    content: "// ";
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
  margin: 0px 12px;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  /* Tech-inspired gradient border for non-primary button */
  ${({ primary }) =>
    !primary &&
    `
    background: linear-gradient(to right, transparent, transparent) padding-box,
                linear-gradient(135deg, rgba(0,0,0,0), rgba(120,120,255,0.5)) border-box;
  `}

  &:before {
    content: "";
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
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

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
  font-family: "Courier New", monospace;
  color: ${({ theme }) => theme.text_primary};
`

const FlipIndicator = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`

const DescriptionFull = styled(Description)`
  -webkit-line-clamp: unset;
  margin: 20px 0;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.card};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary + "50"};
    border-radius: 3px;
  }
`

const ProjectCard = ({ project }: { project: Project }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Card onClick={handleFlip}>
      <CardInner isFlipped={isFlipped}>
        <CardFace>
          <ImageContainer>
            <Image src={project.image} />
            <ButtonOverlay className="button-overlay">
              <Button
                href={project.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <ButtonIcon>{"<>"}</ButtonIcon>
                Code
              </Button>
              <Button
                primary
                href={project.webapp}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <ButtonIcon>{">_"}</ButtonIcon>
                Demo
              </Button>
            </ButtonOverlay>
          </ImageContainer>
          <Title>{project.title}</Title>
          <StyledDate>{project.date}</StyledDate>
          <Tags>
            {project.tags?.map((tag, index) => (
              <Tag key={index + tag}>{tag}</Tag>
            ))}
          </Tags>
          {project.member && (
            <Members>
              {project.member?.map((member, index) => (
                <Avatar key={index + member.name} src={member.img} />
              ))}
            </Members>
          )}
          <FlipIndicator>
            <span>Click to see details</span>
            <span style={{ transform: "rotate(90deg)" }}>↺</span>
          </FlipIndicator>
        </CardFace>

        <CardBack>
          <Title>{project.title}</Title>
          <DescriptionFull>{project.description}</DescriptionFull>
          <FlipIndicator>
            <span>Back to overview</span>
            <span style={{ transform: "rotate(-90deg)" }}>↺</span>
          </FlipIndicator>
        </CardBack>
      </CardInner>
    </Card>
  )
}

export default ProjectCard
