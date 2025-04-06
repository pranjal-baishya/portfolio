import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { useTheme } from "styled-components";
import { Experience } from "../../data/types";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.primary}05;
    z-index: -1;
    transform: scale(0.95);
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.primary}50
    );
    transition: width 0.3s ease;
  }
  
  ${CardContainer}:hover &::after {
    width: 100%;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  display: flex;
  align-items: center;
  
  &::before {
    content: '@ ';
    color: ${({ theme }) => theme.primary};
    margin-right: 4px;
    font-weight: bold;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }
  
  ${CardContainer}:hover &::before {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  display: flex;
  align-items: center;
  
  &::before {
    content: '⏱ ';
    color: ${({ theme }) => theme.primary}90;
    margin-right: 4px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease 0.1s;
  }
  
  ${CardContainer}:hover &::before {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

const SkillsTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
  padding-left: 28px;
  transition: all 0.3s ease;
  
  &::before {
    content: '</>';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  ${CardContainer}:hover &::before {
    transform: rotate(5deg) scale(1.2);
    text-shadow: 0 0 8px ${({ theme }) => theme.primary}50;
  }
  
  ${CardContainer}:hover & {
    transform: translateX(5px);
    color: ${({ theme }) => theme.primary};
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => 
    theme.mode === 'light' 
      ? `rgba(0,0,0,0.05)` 
      : `${theme.card_light || theme.card + '50'}`
  };
  padding: 4px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background-color: ${({ theme }) => theme.primary}15;
    z-index: -1;
    transition: width 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-color: ${({ theme }) => theme.primary};
    
    &::before {
      width: 100%;
    }
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 3px 8px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

// Add a custom styled VerticalTimelineElement
const StyledTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    transition: all 0.3s ease-in-out !important;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.primary}50 0px 10px 30px !important;
      border: 1px solid ${({ theme }) => theme.primary} !important;
      
      ${CardContainer}::before {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

// Add this styled component for the timeline icon
const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const theme = useTheme();
  
  const handleIconClick = () => {
    // Open company website in a new tab if companyUrl exists
    if (experience?.companyUrl) {
      window.open(experience.companyUrl, '_blank');
    }
  };
  
  return (
    <StyledTimelineElement
      icon={
        <IconWrapper onClick={handleIconClick} theme={theme}>
          <img
            alt={experience?.company}
            src={experience?.img}
          />
        </IconWrapper>
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "transparent",
        color: theme.text_primary,
        boxShadow: `${theme.primary}25 0px 4px 24px`,
        backgroundColor: theme.card,
        border: `1px solid ${theme.primary}50`,
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme.primary}50`,
      }}
      date={experience?.date}
    >
      <CardContainer>
        <Top>
          <Image src={experience?.img} />
          <Body>
            <Role>{experience?.role}</Role>
            <Company>{experience?.company}</Company>
            <StyledDate>{experience?.date}</StyledDate>
          </Body>
        </Top>
        <Description>
          {experience?.desc && <Span>{experience.desc}</Span>}
          {experience?.skills && (
            <>
              <br />
              <Skills>
                <SkillsTitle>Skills</SkillsTitle>
                <ItemWrapper>
                  {experience?.skills?.map((skill, index) => (
                    <Skill 
                      key={index + skill}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      {skill}
                    </Skill>
                  ))}
                </ItemWrapper>
              </Skills>
            </>
          )}
        </Description>
      </CardContainer>
    </StyledTimelineElement>
  );
};

export default ExperienceCard;
