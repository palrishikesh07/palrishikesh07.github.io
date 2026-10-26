import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack, Chip } from '@mui/material';

const projects = [
  {
    title: 'ENBD Enterprise Banking',
    desc: 'Built scalable REST APIs for enterprise banking, implementing Kafka event processing and Redis caching.',
    tags: ['Node.js', 'Kafka', 'Redis', 'Next.js']
  },
  {
    title: 'Goalster Serverless Platform',
    desc: 'Designed AWS serverless application architecture with FastAPI and Node.js, boosting performance by 40%.',
    tags: ['FastAPI', 'AWS Lambda', 'MySQL', 'React.js']
  },
  {
    title: 'StayVista Booking System',
    desc: 'Optimized property search APIs from 5 seconds to under 1 second using Elasticsearch and Redis.',
    tags: ['Elasticsearch', 'Redis', 'Node.js', 'MySQL']
  }
];

export const ProjectsSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
      Featured Projects
    </Typography>
    <Grid container spacing={3}>
      {projects.map((proj, idx) => (
        <Grid size={{ xs: 12, sm: 6 }} key={idx}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>{proj.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{proj.desc}</Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: 'wrap', gap: 0.5 }}
              >
                {proj.tags.map(t => <Chip key={t} label={t} size="small" sx={{ borderRadius: 1.5 }} />)}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);