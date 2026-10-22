import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  CircularProgress,
  Avatar,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { downloadResume } from '../utils/downloadResume';
import { CodeCard } from './CodeCard';
import { useAppTheme } from '../context/ThemeContext';
import profileImg from '../assets/Rishi_profile.png'; // Direct static import

const heroSkills = ['Node.js', 'React.js', 'TypeScript', 'AWS', 'Kafka', 'MongoDB', 'Redis'];

export const HeroSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { mode } = useAppTheme();
  const isDark = mode === 'dark';

  const handleDownload = async () => {
    setLoading(true);
    try {
      await downloadResume();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 3, md: 6 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 5, md: 4, lg: 6 },
      }}
    >
      {/* LEFT COLUMN: Photo, Intro, Badges, Tech Pills, Buttons */}
      <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '56%' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Avatar
            src={profileImg}
            alt="Rishikesh Pal"
            variant="rounded" // Recommended when width and height are different (rectangular portrait)
            sx={{
              width: { xs: 80, sm: 100 },
              height: { xs: 96, sm: 120 },
              borderRadius: '20px',
              border: '3px solid #0284c7',
              boxShadow: '0 8px 24px rgba(2, 132, 199, 0.25)',
            }}
          />
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip
                icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', mr: 0.5 }} />}
                label="AVAILABLE FOR WORK"
                size="small"
                sx={{
                  bgcolor: isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                  color: isDark ? '#34d399' : '#059669',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  borderRadius: 2,
                }}
              />
              <Chip
                icon={<WorkOutlineOutlinedIcon sx={{ fontSize: '0.95rem !important' }} />}
                label="LEAD / FULL STACK"
                size="small"
                sx={{
                  bgcolor: isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.1)',
                  color: isDark ? '#38bdf8' : '#0284c7',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  borderRadius: 2,
                }}
              />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Bangalore, India • 10+ Years Experience[cite: 4]
            </Typography>
          </Stack>
        </Box>

        {/* Name Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2.4rem', sm: '3.2rem', lg: '3.6rem' },
            lineHeight: 1.15,
            mb: 1.5,
            letterSpacing: '-0.03em',
            color: 'text.primary',
          }}
        >
          Hi, I'm{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Rishikesh
          </Box>
        </Typography>

        {/* Subtitle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'primary.main' }}>
          <AutoAwesomeIcon fontSize="small" />
          <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: 0.8 }}>
            BUILDING HIGH-THROUGHPUT & SCALABLE DIGITAL SYSTEMS
          </Typography>
        </Box>

        {/* Summary Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            lineHeight: 1.75,
            mb: 3,
          }}
        >
          <strong>Lead Technology & Senior Full Stack Engineer</strong> with 10+ years of experience
          crafting event-driven microservices (Kafka, Redis), AWS serverless backends, and high-performance
          React web applications[cite: 4].
        </Typography>

        {/* Skill Pills */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
          {heroSkills.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.8rem',
                py: 1.8,
                bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
              }}
            />
          ))}
        </Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            onClick={handleDownload}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <DownloadIcon />}
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 700,
              px: 3,
              py: 1.2,
              background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
              boxShadow: '0 8px 20px rgba(2, 132, 199, 0.35)',
            }}
          >
            {loading ? 'Downloading...' : 'Resume'}
          </Button>
          <Button
            component="a"
            href="https://github.com/palrishikesh07"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2.5,
              py: 1.2,
              bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#ffffff',
            }}
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="https://linkedin.com/in/rishikeshpal"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<LinkedInIcon color="primary" />}
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 600,
              px: 2.5,
              py: 1.2,
              bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#ffffff',
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>

      {/* RIGHT COLUMN: CodeCard */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: '100%', md: '44%' },
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
        }}
      >
        <CodeCard />
      </Box>
    </Box>
  );
};