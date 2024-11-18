// src/components/ProjectCard.tsx
import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material"
import styled from "styled-components"

const StyledCard = styled(Card)`
  margin: 1rem;
`

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <StyledCard>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  )
}

export default ProjectCard
