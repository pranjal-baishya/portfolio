import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import styled, { useTheme } from "styled-components"
import { Education } from "../../data/types"

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${({ theme }) => theme.primary}70, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.primary}70, 
      transparent
    );
  }
`

const Image = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-top: 4px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.primary}40;
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.primary}00,
      ${({ theme }) => theme.primary}70
    );
    z-index: -1;
    animation: rotate 3s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  display: inline-block;
  
  &:before {
    content: '> ';
    color: ${({ theme }) => theme.primary};
    font-family: monospace;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-left: 16px;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}80;
  margin-left: 16px;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
  
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;
  margin-bottom: 10px;
  position: relative;
  padding: 8px;
  background: ${({ theme }) => theme.card_light || theme.card}50;
  border-radius: 4px;
  border-left: 2px solid ${({ theme }) => theme.primary};
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  display: inline-block;
  padding: 4px 8px;
  background: ${({ theme }) => theme.primary}15;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.primary}30;
  font-family: 'Courier New', monospace;
  
  b {
    color: ${({ theme }) => theme.primary};
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
  line-height: 1.5;
`

const StyledTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: transparent;
    color: ${({ theme }) => theme.text_primary};
    box-shadow: ${({ theme }) => theme.primary}25 0px 4px 24px;
    background-color: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary}50;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: ${({ theme }) => theme.primary}80 0px 8px 30px;
      border: 1px solid ${({ theme }) => theme.primary};
      background: linear-gradient(225deg, ${({ theme }) => theme.card} 0%, ${({ theme }) => theme.primary}10 100%);
    }
  }
  
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${({ theme }) => theme.primary}50;
    transition: all 0.3s ease-in-out;
  }
  
  .vertical-timeline-element-icon {
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}50, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    
    &:hover {
      box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
  }
`

const EducationCard = ({ education }: { education: Education }) => {
  const theme = useTheme()

  return (
    <StyledTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      date={education?.date}
    >
      <Top>
        <Image>
          <img src={education?.img} alt={education?.school} />
        </Image>
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade:</b> {education?.grade}
      </Grade>
      {education?.desc && (
        <Description>
          <Span>{education.desc}</Span>
        </Description>
      )}
    </StyledTimelineElement>
  )
}

export default EducationCard
