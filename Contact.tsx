import React from "react";
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Paper 
} from "@mui/material";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  padding: 2rem;
  margin: 2rem 0;
`;

const FormField = styled(TextField)`
  margin: 1rem 0;
`;

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h3" gutterBottom align="center">
          Contact Me
        </Typography>
        
        <StyledPaper elevation={3}>
          <form onSubmit={handleSubmit}>
            <FormField
              fullWidth
              label="Name"
              variant="outlined"
              required
            />
            <FormField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
            />
            <FormField
              fullWidth
              label="Subject"
              variant="outlined"
              required
            />
            <FormField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              size="large"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </StyledPaper>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom align="center">
            Other Ways to Reach Me
          </Typography>
          <Typography align="center" color="text.secondary">
            Email: your.email@example.com
            <br />
            LinkedIn: linkedin.com/in/yourprofile
            <br />
            GitHub: github.com/yourusername
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
