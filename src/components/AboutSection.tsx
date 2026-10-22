import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export const AboutSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
      About Me
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <CardContent>
            <Typography variant="h4" color="primary.main" sx={{ fontWeight: 800 }}>10+</Typography>
            <Typography variant="body2" color="text.secondary">Years Experience</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <CardContent>
            <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 800 }}>6+</Typography>
            <Typography variant="body2" color="text.secondary">Years in Tech Leadership</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <CardContent>
            <Typography variant="h4" color="primary.main" sx={{ fontWeight: 800 }}>AWS & Kafka</Typography>
            <Typography variant="body2" color="text.secondary">Cloud & Event Architectures</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);