import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';

const skills = [
  'Node.js', 'React.js', 'TypeScript', 'Next.js', 'Python', 'FastAPI',
  'GraphQL', 'AWS Lambda', 'AWS SQS/SNS', 'Apache Kafka', 'Redis',
  'MongoDB', 'MySQL', 'Elasticsearch', 'Docker', 'Playwright', 'Microservices'
];

export const TechStackChips: React.FC = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Chip
        label="TECH STACKS"
        size="small"
        sx={{ fontWeight: 800, letterSpacing: 1, mb: 2.5, px: 1, borderRadius: 2 }}
      />
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.2,
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={{
              fontWeight: 600,
              borderRadius: 3,
              px: 0.5,
              py: 2,
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'action.hover',
              },
            }}
          />
        ))}
      </Paper>
    </Box>
  );
};