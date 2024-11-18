import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #1976d2;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return <FooterContainer>© 2024 My Portfolio. All rights reserved.</FooterContainer>;
};

export default Footer;
