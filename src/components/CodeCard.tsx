import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppTheme } from '../context/ThemeContext';

export const CodeCard: React.FC = () => {
  const { mode } = useAppTheme();
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: 520 },
        borderRadius: '24px 24px 0px 0px',
        bgcolor: isDark ? 'rgba(10, 15, 29, 0.95)' : '#ffffff',
        border: isDark
          ? '1px solid rgba(56, 189, 248, 0.25)'
          : '1px solid rgba(2, 132, 199, 0.2)',
        boxShadow: isDark
          ? '0 20px 40px -15px rgba(2, 132, 199, 0.25), 0 0 25px -5px rgba(56, 189, 248, 0.15)'
          : '0 20px 40px -15px rgba(2, 132, 199, 0.12), 0 4px 20px rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        fontFamily: '"Fira Code", "JetBrains Mono", Consolas, monospace',
      }}
    >
      {/* Top Window Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 3 },
          py: 1.8,
          borderBottom: isDark
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(0, 0, 0, 0.06)',
          bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(248, 250, 252, 0.8)',
        }}
      >
        {/* macOS Control Dots */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: '#ef4444' }} />
          <Box sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: '#f59e0b' }} />
          <Box sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: '#10b981' }} />
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: isDark ? '#38bdf8' : '#0284c7',
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: 0.5,
          }}
        >
          rishikesh.config.ts
        </Typography>
      </Box>

      {/* Code Tab Strip */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, sm: 3 },
          pt: 2,
          pb: 1,
          gap: 1.2,
        }}
      >
        {/* <Box
          sx={{
            px: 1.5,
            py: 0.4,
            bgcolor: isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.08)',
            border: isDark
              ? '1px solid rgba(56, 189, 248, 0.35)'
              : '1px solid rgba(2, 132, 199, 0.3)',
            borderRadius: '8px',
            color: isDark ? '#38bdf8' : '#0284c7',
            fontSize: '0.76rem',
            fontWeight: 700,
          }}
        >
          rishikesh.config.ts
        </Box> */}
        {/* <Box
          sx={{
            width: 20,
            height: 4,
            borderRadius: 2,
            bgcolor: isDark ? '#38bdf8' : '#0284c7',
          }}
        /> */}
        {/* <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)',
          }}
        /> */}
      </Box>

      {/* Code Body with Responsive Font & Syntax Colors */}
      {/* <Box
        component="pre"
        sx={{
          m: 0,
          p: { xs: 2, sm: 3 },
          pt: 1.5,
          fontSize: { xs: '0.78rem', sm: '0.88rem' },
          lineHeight: 1.85,
          color: isDark ? '#e2e8f0' : '#1e293b',
          whiteSpace: 'pre',
          overflowX: 'auto',
          fontFamily: 'inherit',
        }}
      >
        <span style={{ color: isDark ? '#38bdf8' : '#0284c7', fontWeight: 700 }}>const</span>{' '}
        <span style={{ color: isDark ? '#00f5ff' : '#0369a1', fontWeight: 600 }}>developer</span>{' '}
        <span style={{ color: isDark ? '#e2e8f0' : '#334155' }}>=</span> {'{\n'}
        {'  '}name: <span style={{ color: isDark ? '#34d399' : '#059669' }}>'Rishikesh Pal'</span>,{'\n'}
        {'  '}role: <span style={{ color: isDark ? '#34d399' : '#059669' }}>'Lead Full Stack Engineer'</span>,{'\n'}
        {'  '}skills: [{'\n'}
        {'    '}<span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'Node.js'</span>,{' '}
        <span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'React.js'</span>,{' '}
        <span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'Kafka'</span>,{' '}
        <span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'AWS'</span>{'\n'}
        {'  '}],{'\n'}
        {'  '}status: <span style={{ color: isDark ? '#34d399' : '#059669' }}>'Available for Roles'</span>{'\n'}
        {'}'}
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '2px',
            height: '1.1em',
            bgcolor: isDark ? '#38bdf8' : '#0284c7',
            ml: 0.5,
            verticalAlign: 'text-bottom',
            animation: 'cursorBlink 1s infinite',
            '@keyframes cursorBlink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 },
            },
          }}
        />
      </Box> */}
      {/* Code Body with Left Alignment & Code Indentation */}
     {/* Code Body with Sleek Custom Scrollbar */}
      <Box
        component="pre"
        sx={{
          m: 0,
          p: { xs: 2.5, sm: 3.5 },
          pb: 2,
          textAlign: 'left',
          fontSize: { xs: '0.82rem', sm: '0.9rem' },
          lineHeight: 1.85,
          color: isDark ? '#e2e8f0' : '#1e293b',
          whiteSpace: 'pre',
          overflowX: 'auto',
          fontFamily: 'inherit',
          // Sleek modern scrollbar
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.25)',
            borderRadius: '4px',
            '&:hover': {
              background: isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.45)',
            },
          },
          scrollbarWidth: 'thin',
          scrollbarColor: isDark 
            ? 'rgba(56, 189, 248, 0.25) transparent' 
            : 'rgba(2, 132, 199, 0.25) transparent',
        }}
      >
        <span style={{ color: isDark ? '#38bdf8' : '#0284c7', fontWeight: 700 }}>const</span>{' '}
        <span style={{ color: isDark ? '#00f5ff' : '#0369a1', fontWeight: 600 }}>developer</span>{' '}
        <span style={{ color: isDark ? '#e2e8f0' : '#334155' }}>=</span> {'{\n'}
        {'  '}name: <span style={{ color: isDark ? '#34d399' : '#059669' }}>'Rishikesh Pal'</span>,{'\n'}
        {'  '}role: <span style={{ color: isDark ? '#34d399' : '#059669' }}>'Lead Full Stack Engineer'</span>,{'\n'}
        {'  '}skills: [{'\n'}
        {'    '}<span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'Node.js'</span>,{' '}
        <span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'React.js'</span>,{' '}
        <span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'Kafka'</span>,{' '}
        <span style={{ color: isDark ? '#c084fc' : '#9333ea' }}>'AWS'</span>{'\n'}
        {'  '}],{'\n'}
        {'  '}status: <span style={{ color: isDark ? '#34d399' : '#059669' }}>'Available for Roles'</span>{'\n'}
        {'}'}
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '2px',
            height: '1.15em',
            bgcolor: isDark ? '#38bdf8' : '#0284c7',
            ml: 0.5,
            verticalAlign: 'text-bottom',
            animation: 'cursorBlink 1s infinite',
            '@keyframes cursorBlink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 },
            },
          }}
        />
      </Box>
    </Box>
  );
};