import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Avatar,
  Stack,
  IconButton,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppTheme } from '../context/ThemeContext';
import { downloadResume } from '../utils/downloadResume';

export const LeftProfileCard: React.FC = () => {
  const { mode, toggleTheme } = useAppTheme();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadResume();
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Card sx={{ position: { md: 'sticky' }, top: { md: 32 }, p: 1 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Top Header Action */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <Tooltip title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} mode`}>
            <IconButton onClick={toggleTheme} size="small" color="inherit">
              {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Profile Image Frame */}
        <Box sx={{ width: '100%', mb: 2 }}>
          <Avatar
            variant="rounded"
            src="https://avatars.githubusercontent.com/u/44933938?v=4" // GitHub profile picture
            alt="Rishikesh Pal"
            sx={{
              width: '100%',
              height: 260,
              borderRadius: 4,
              objectFit: 'cover',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }}
          />
        </Box>

        {/* Name and Title */}
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Hello, I'm
        </Typography>
        <Typography variant="h4" color="primary.main" sx={{ fontWeight: 800, mb: 0.5 }}>
          Rishikesh Pal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1.5 }}>
          Lead Technology & Senior Full Stack Engineer (MERN / Python / Cloud)
        </Typography>

        {/* Location */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', mb: 3 }}>
          <LocationOnOutlinedIcon fontSize="small" />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            Bangalore, India
          </Typography>
        </Box>

        {/* Social / Contact Links List */}
        <Stack spacing={1.2} sx={{ width: '100%', mb: 3 }}>
          <Button
            component="a"
            href="https://linkedin.com/in/rishikeshpal"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon color="primary" />}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              color: 'text.primary',
              bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
              borderRadius: 3,
              px: 2,
              py: 1,
            }}
          >
            rishikeshpal
          </Button>

          <Button
            component="a"
            href="https://github.com/palrishikesh07"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              color: 'text.primary',
              bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
              borderRadius: 3,
              px: 2,
              py: 1,
            }}
          >
            palrishikesh07
          </Button>

          <Button
            component="a"
            href="mailto:palrishikesh007@gmail.com"
            startIcon={<EmailOutlinedIcon color="error" />}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              color: 'text.primary',
              bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
              borderRadius: 3,
              px: 2,
              py: 1,
              wordBreak: 'break-all',
              fontSize: '0.82rem',
            }}
          >
            palrishikesh007@gmail.com
          </Button>
        </Stack>

        {/* Actions */}
        <Stack spacing={1.5} sx={{ width: '100%' }}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleDownload}
            disabled={downloading}
            startIcon={downloading ? <CircularProgress size={18} color="inherit" /> : <DownloadIcon />}
            sx={{
              borderRadius: 3,
              py: 1.3,
              textTransform: 'none',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
            }}
          >
            {downloading ? 'Downloading...' : 'Download Resume'}
          </Button>

          <Button
            component="a"
            href="mailto:palrishikesh007@gmail.com"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 3,
              py: 1.2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};