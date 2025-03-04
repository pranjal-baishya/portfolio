import React from 'react';
import styled from 'styled-components';

// Import background components
import { GridBackground, GradientCorners, CircuitPattern, DotsGrid, WaveDivider } from './SectionBackground';

interface SectionProps {
  id: string;
  type: 'grid' | 'gradient' | 'circuit' | 'dots' | 'none';
  withDivider?: boolean;
  children: React.ReactNode;
}

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const SectionContainer = ({ id, type, withDivider = false, children }: SectionProps) => {
  return (
    <Section id={id}>
      {type === 'grid' && <GridBackground />}
      {type === 'gradient' && <GradientCorners />}
      {type === 'circuit' && <CircuitPattern />}
      {type === 'dots' && <DotsGrid />}
      
      {children}
      
      {withDivider && <WaveDivider />}
    </Section>
  );
};

export default SectionContainer; 