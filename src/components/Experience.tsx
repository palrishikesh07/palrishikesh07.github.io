import React from 'react';
import { Container, Typography, Card, CardContent, Box, Chip } from '@mui/material';

const experiences = [
  {
    role: 'Lead Technology',
    company: 'Synechron',
    period: 'Nov 2024 - Mar 2026',
    highlights: [
      'Built scalable backend APIs using Node.js, Next.js, GraphQL, TypeScript, AWS, Kafka, and MongoDB.',
      'Reduced API response latency with Redis caching and micro-frontend React integration.',
      'Led delivery planning, mentored engineers, and authored Playwright test suites.'
    ]
  },
  {
    role: 'Lead Consultant',
    company: 'Quinnox',
    period: 'Aug 2024 - Nov 2024',
    highlights: [
      'Modernized legacy monolithic services into modular Node.js microservices.',
      'Centralized API validation and optimized database query bottlenecks.'
    ]
  },
  {
    role: 'Senior Software Engineer',
    company: 'Metrics Numero',
    period: 'Sep 2022 - Aug 2024',
    highlights: [
      'Led 5 developers, designed Node.js and FastAPI serverless architectures.',
      'Refactored frontend and backend for a 40% performance improvement in query paths.'
    ]
  }
];

export const Experience: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
      Work Experience
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {experiences.map((exp, idx) => (
        <Card key={idx} variant="outlined">
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {exp.role} ·{' '}
                <Box
                  component="span"
                  sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  {exp.company}
                </Box>
              </Typography>
              <Chip label={exp.period} size="small" variant="outlined" />
            </Box>
            <ul>
              {exp.highlights.map((point, i) => (
                <li key={i}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Container>
);