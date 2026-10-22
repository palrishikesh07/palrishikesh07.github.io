import React from 'react';
import { Box, Typography, Card, CardContent, Stack, Chip } from '@mui/material';

const experiences = [
  {
    company: 'Synechron',
    role: 'Lead Technology',
    period: 'Nov 2024 - Mar 2026',
    desc: 'Designed backend APIs using Node.js, Next.js, GraphQL, TypeScript, AWS, Kafka, and MongoDB[cite: 4]. Implemented event-driven architecture and Redis caching to reduce latency[cite: 4].'
  },
  {
    company: 'Quinnox',
    role: 'Lead Consultant',
    period: 'Aug 2024 - Nov 2024',
    desc: 'Modernized legacy systems into modular Node.js services and applied database query optimization[cite: 4].'
  },
  {
    company: 'Metrics Numero',
    role: 'Senior Software Engineer',
    period: 'Sep 2022 - Aug 2024',
    desc: 'Led 5 developers, architecting Node.js APIs, FastAPI services, and React modules with AWS serverless[cite: 4].'
  }
];

export const ExperienceSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
      Experience Timeline
    </Typography>
    <Stack spacing={3}>
      {experiences.map((exp, idx) => (
        <Card key={idx} variant="outlined">
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, flexWrap: 'wrap' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {exp.role} · <Typography component="span" color="primary.main">{exp.company}</Typography>
              </Typography>
              <Chip label={exp.period} size="small" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {exp.desc}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);