import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography, Avatar, IconButton, useTheme, useMediaQuery, Divider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', pb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            py: 2,
            mt: '10vh',
          }}
        >
          <Avatar
            src="/images/profile-photo.jpg"
            alt="Mohsen Moeini"
            sx={{
              width: isMobile ? 120 : 160,
              height: isMobile ? 120 : 160,
              border: '3px solid #1976d2',
              boxShadow: '0 4px 14px rgba(25, 118, 210, 0.2)',

            }}
          />
          <Divider sx={{ 
            width: '100%', 
            maxWidth: 600, 
            my: 2,
            background: 'linear-gradient(90deg, transparent, rgba(25, 118, 210, 0.5), transparent)'
          }} />
          
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h1" sx={{ 
              mb: 1, 
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(25, 118, 210, 0.1)'
            }}>
              Mohsen Moeini
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ mb: 1 }}>
              Java Backend Software Engineer
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 600, textAlign: 'center', px: 2 }}>
            <Typography variant="body1">
              Passionate Java backend developer with expertise in building scalable and efficient web applications.
              Focused on creating robust solutions using Spring Boot and modern development practices.
            </Typography>
            <Divider sx={{ 
            width: '100%', 
            maxWidth: 600, 
            my: 2,
            background: 'linear-gradient(90deg, transparent, rgba(25, 118, 210, 0.5), transparent)'
          }} />
          </Box>
        </Box>

        <Box
          component="footer"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 'auto',
            mb: '10vh'
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/mohsen-moeini-98688a266/"
            target="_blank"
            aria-label="LinkedIn"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/MohsenMoeini"
            target="_blank"
            aria-label="GitHub"
            color="primary"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="mailto:moeini.mhsn@gmail.com"
            aria-label="Email"
            color="primary"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
