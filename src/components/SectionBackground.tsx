import styled from 'styled-components';

const GradientCorners = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: ${({ theme }) => theme.mode === 'dark' ? '0.07' : '0.05'};
  }
  
  &::before {
    top: -100px;
    left: -100px;
    background: ${({ theme }) => theme.primary};
  }
  
  &::after {
    bottom: -100px;
    right: -100px;
    background: ${({ theme }) => `${theme.primary}90`};
  }
`

const DotsGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      ${({ theme }) => theme.primary}20 1px, 
      transparent 1px
    );
    background-size: 30px 30px;
    opacity: 0.4;
  }
` 
const WaveDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
    
    path {
      fill: ${({ theme }) => theme.mode === 'dark' 
        ? '#1a1a2e' 
        : '#f8f9fa'};
    }
  }
`

const CircuitPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('/images/circuit-pattern.svg');
  background-size: 500px;
  background-repeat: repeat;
  opacity: ${({ theme }) => theme.mode === 'dark' ? '0.05' : '0.03'};
  filter: invert(${({ theme }) => theme.mode === 'dark' ? '0' : '1'});
`

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: ${({ theme }) => 
    `linear-gradient(${theme.card}10 1px, transparent 1px),
    linear-gradient(90deg, ${theme.card}10 1px, transparent 1px)`};
  background-size: 20px 20px;
  opacity: 0.4;
`

export { GradientCorners, DotsGrid, WaveDivider, CircuitPattern, GridBackground };