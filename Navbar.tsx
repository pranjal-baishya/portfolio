import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 1rem;
`;

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <StyledLink to="/">
          <Button color="inherit">Home</Button>
        </StyledLink>
        <StyledLink to="/about">
          <Button color="inherit">About</Button>
        </StyledLink>
        <StyledLink to="/projects">
          <Button color="inherit">Projects</Button>
        </StyledLink>
        <StyledLink to="/contact">
          <Button color="inherit">Contact</Button>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
