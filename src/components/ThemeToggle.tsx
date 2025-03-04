import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { DarkMode, LightMode } from "@mui/icons-material"

const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.primary}30;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.primary}20;
  }

  svg {
    font-size: 20px;
    fill: ${({ theme }) => theme.primary};
  }
`

const ThemeToggle = ({
  theme,
  toggleTheme,
}: {
  theme: string
  toggleTheme: () => void
}) => {
  const isDark = theme === "dark"

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{
        rotate: [0, 15, -15, 0],
        scale: [1, 1.2, 1.2, 1],
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      key={theme}
    >
      <StyledButton onClick={toggleTheme}>
        {isDark ? (
          <LightMode style={{ color: "#FFD700" }} />
        ) : (
          <DarkMode style={{ color: "#6A00FF" }} />
        )}
      </StyledButton>
    </motion.div>
  )
}

export default ThemeToggle
