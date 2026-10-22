import React from 'react';
import { Box, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { useAppTheme } from '../context/ThemeContext';

export const ConfigHeader: React.FC = () => {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <CodeOutlinedIcon color="primary" />
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 600 }}>
          rishikesh.config.ts
        </Typography>
      </Box>
      <Tooltip title="Toggle Theme">
        <IconButton onClick={toggleTheme} size="small" color="inherit">
          {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Paper>
  );
};