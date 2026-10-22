import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const ContactSection: React.FC = () => (
  <Paper elevation={0} sx={{ p: 5, textAlign: 'center', borderRadius: 6, border: '1px solid', borderColor: 'divider', mb: 4 }}>
    <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>Let's Build Something Great</Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      I'm available for lead engineering roles, backend microservice architecture, and web application development.
    </Typography>
    <Button
      component="a"
      href="mailto:palrishikesh007@gmail.com"
      variant="contained"
      size="large"
      startIcon={<EmailOutlinedIcon />}
      sx={{ borderRadius: 3, textTransform: 'none', px: 4, fontWeight: 700 }}
    >
      palrishikesh007@gmail.com
    </Button>
  </Paper>
);