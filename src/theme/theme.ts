import { createTheme, type PaletteMode,type Theme } from '@mui/material';

export const getAppTheme = (mode: PaletteMode): Theme =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#0284c7' }, // Cyan accent
      secondary: { main: '#8b5cf6' }, // Purple accent
      background: {
        default: mode === 'dark' ? '#07090e' : '#f8fafc',
        paper: mode === 'dark' ? '#0d1117' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#f3f4f6' : '#0f172a',
        secondary: mode === 'dark' ? '#94a3b8' : '#64748b',
      },
    },
    typography: {
      fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif',
      h3: { fontWeight: 800, letterSpacing: '-0.02em' },
      h4: { fontWeight: 800, letterSpacing: '-0.02em' },
      h5: { fontWeight: 700 },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.07)' : '1px solid rgba(0, 0, 0, 0.06)',
            backgroundImage: 'none',
          },
        },
      },
    },
  });