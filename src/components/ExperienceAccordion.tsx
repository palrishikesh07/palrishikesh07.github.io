import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

interface Job {
  company: string;
  role: string;
  period: string;
  color: string;
  bullets: string[];
}

const experiences: Job[] = [
  {
    company: 'Synechron',
    role: 'Lead Technology',
    period: 'Nov 2024 - Mar 2026',
    color: '#ef4444',
    bullets: [
      'Designed scalable backend APIs using Node.js, Next.js, GraphQL, TypeScript, AWS, Kafka, and MongoDB[cite: 4].',
      'Implemented event-driven pipelines and Redis caching to eliminate bottlenecks and optimize API latency[cite: 4].',
      'Integrated React.js modules in a micro-frontend architecture with Playwright automated test suites[cite: 4].',
      'Mentored engineers and enforced code-review checklists, API standards, and observability practices[cite: 4].',
    ],
  },
  {
    company: 'Quinnox',
    role: 'Lead Consultant',
    period: 'Aug 2024 - Nov 2024',
    color: '#0ea5e9',
    bullets: [
      'Modernized legacy platforms into modular Node.js microservices with centralized validation and error handling[cite: 4].',
      'Conducted profiling and database query optimization to unblock mission-critical endpoints[cite: 4].',
    ],
  },
  {
    company: 'Metrics Numero',
    role: 'Senior Software Engineer',
    period: 'Sep 2022 - Aug 2024',
    color: '#10b981',
    bullets: [
      'Led an engineering squad of 5 developers across design reviews, sprint planning, and AWS serverless deliveries[cite: 4].',
      'Architected Node.js APIs, FastAPI services, and React.js interfaces, boosting performance by up to 40%[cite: 4, 5].',
    ],
  },
  {
    company: 'PlayerzPot',
    role: 'Software Engineer',
    period: 'Apr 2022 - Sep 2022',
    color: '#f59e0b',
    bullets: [
      'Built resilient backend services handling high-frequency updates and peak contest traffic.',
      'Engineered asynchronous job orchestration with robust retry and fallback mechanics[cite: 5].',
    ],
  },
  {
    company: 'Unico Connect',
    role: 'Software Developer',
    period: 'Oct 2019 - Feb 2022',
    color: '#8b5cf6',
    bullets: [
      'Led 4 developers; reduced search API latency from 5s to under 1s using Elasticsearch and Redis caching[cite: 5].',
      'Developed AWS REST APIs with CI/CD integration, role checks, and JWT authentication[cite: 5].',
    ],
  },
];

export const ExperienceAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>('Synechron');

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Chip
        label="EXPERIENCE"
        size="small"
        sx={{ fontWeight: 800, letterSpacing: 1, mb: 2, px: 1, borderRadius: 2 }}
      />

      {experiences.map((exp) => (
        <Accordion
          key={exp.company}
          expanded={expanded === exp.company}
          onChange={handleChange(exp.company)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: exp.color, width: 42, height: 42, borderRadius: 3 }}>
                  <BusinessCenterOutlinedIcon fontSize="small" sx={{ color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.role}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                {exp.period}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0, pb: 2 }}>
            <Stack spacing={1} sx={{ pl: 6 }}>
              {exp.bullets.map((bullet, idx) => (
                <Typography key={idx} variant="body2" color="text.secondary" sx={{ display: 'list-item' }}>
                  {bullet}
                </Typography>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};