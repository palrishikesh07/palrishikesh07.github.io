import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';

const skills = [
  'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React.js', 'Next.js',
  'Python', 'FastAPI', 'GraphQL', 'MongoDB', 'MySQL', 'AWS Lambda',
  'Apache Kafka', 'Redis', 'Elasticsearch', 'Docker', 'Playwright', 'CI/CD'
];

export const SkillsSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
      Tech Stack & Expertise
    </Typography>
    <Paper elevation={0} sx={{ p: 3, display: 'flex', flexWrap: 'wrap', gap: 1.5, border: '1px solid', borderColor: 'divider' }}>
      {skills.map((skill) => (
        <Chip key={skill} label={skill} variant="outlined" sx={{ borderRadius: 3, fontWeight: 600, py: 2 }} />
      ))}
    </Paper>
  </Box>
);