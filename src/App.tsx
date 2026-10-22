import React from 'react';
import { Container, Box } from '@mui/material';
import { ThemeContextProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Box
        sx={{
          minHeight: '100vh',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          pb: 6,
        }}
      >
        {/* Top Navbar with Dark/Light Toggle */}
        <Navbar />

        {/* Content Container */}
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Container>
      </Box>
    </ThemeContextProvider>
  );
};

export default App;