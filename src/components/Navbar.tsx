import React from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Container, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { mode, toggleTheme } = useAppTheme();
  const isDark = mode === 'dark';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: isDark ? 'rgba(7, 9, 14, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
        color: 'text.primary',
        mb: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
          {/* Left Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>

            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              Rishikesh Pal
            </Typography>
          </Box>

          {/* Right Mode Switch */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Tooltip title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                  p: 1,
                }}
              >
                {isDark ? <Brightness7Icon sx={{ color: '#f59e0b' }} /> : <Brightness4Icon sx={{ color: '#0284c7' }} />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};