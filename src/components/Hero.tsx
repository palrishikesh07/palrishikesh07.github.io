import React, { useState } from 'react';
import { Box, Typography, Button, Container, CircularProgress, Alert } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { downloadResume } from '../utils/downloadResume';

export const Hero: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      await downloadResume();
    } catch {
      setError('Could not download resume directly. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
          Hi, I'm Rishikesh Pal
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
          Lead Technology / Senior MERN Stack & Cloud Engineer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, lineHeight: 1.8 }}>
          10+ years of software development experience specializing in scalable backend APIs,
          event-driven microservices (Kafka, Redis), AWS Serverless, and performant React applications.
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <DownloadIcon />}
          onClick={handleDownload}
          disabled={loading}
          sx={{ px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem' }}
        >
          {loading ? 'Downloading...' : 'Download Resume'}
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 3, maxWidth: 400, mx: 'auto' }}>
            {error}
          </Alert>
        )}
      </Container>
    </Box>
  );
};