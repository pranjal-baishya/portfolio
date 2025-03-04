import React, { useEffect, useRef } from "react"
import styled, { useTheme } from "styled-components"
import { Bio } from "../../data/constants"
import Typewriter from "typewriter-effect"
import HeroImg from "../../images/HeroImage.jpg"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion"

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.4;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle,
      transparent 20%,
      ${({ theme }) => theme.background} 70%
    );
    z-index: -1;
    opacity: 0.8;
  }
`

const TechIcons = styled.div`
  position: absolute;
  width: 145%;
  height: 145%;
  top: -20%;
  left: -20%;
  z-index: -1;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Icon = styled.div`
  position: absolute;
  font-size: 24px;
  opacity: 0.6;
  color: ${({ theme }) => theme.primary};
`

const CyberpunkButton = styled.a`
  position: relative;
  text-decoration: none;
  display: inline-block;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => (theme.dark ? "white" : theme.text_primary)};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => `${theme.primary}80`},
      transparent
    );
    transition: all 0.6s ease;
  }

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.dark
        ? `0 0 10px ${theme.primary}, 0 0 20px ${theme.primary}`
        : `0 0 10px ${theme.primary}40`};
    color: ${({ theme }) => (theme.dark ? "white" : theme.primary)};
    background: ${({ theme }) =>
      theme.dark ? `${theme.primary}40` : `${theme.background}`};
    transform: translateY(-3px);
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: "< />";
    position: absolute;
    right: 12px;
    font-family: monospace;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    opacity: 0.7;
    top: 20px;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`

const TechParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const theme = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }> = []
    const particleCount = 30

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = theme.primary
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [theme.primary])

  return <ParticleCanvas ref={canvasRef} />
}

const Hero = () => {
  const theme = useTheme()

  return (
    <div id="About">
      <HeroContainer>
        <TechParticles />
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title
                  style={{
                    color: theme.text_primary,
                  }}
                >
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span
                    style={{
                      color: theme.primary,
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle
                  style={{
                    color: theme.text_secondary,
                  }}
                >
                  {Bio.description}
                </SubTitle>
              </motion.div>
              <CyberpunkButton href={Bio.resume} target="_blank">
                Check Resume
              </CyberpunkButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ImageContainer>
                  <TechIcons>
                    <Icon style={{ top: "25%", left: "18%" }}>{"<>"}</Icon>
                    <Icon style={{ top: "70%", left: "20%" }}>{"{ }"}</Icon>
                    <Icon style={{ top: "30%", right: "15%" }}>{"</>"}</Icon>
                    <Icon style={{ bottom: "20%", right: "25%" }}>{"()"}</Icon>
                  </TechIcons>
                  <Tilt options={{ max: 25, scale: 1.05 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                    >
                      <Img
                        src={HeroImg}
                        alt="Pranjal Baishya"
                        style={{
                          border: `2px solid ${theme.primary}`,
                        }}
                      />
                    </motion.div>
                  </Tilt>
                </ImageContainer>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default Hero
