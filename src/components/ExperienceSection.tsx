import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const experiences = [
  {
    company: 'Synechron',
    role: 'Lead Technology',
    period: 'Nov 2024 - Mar 2026',
    desc: 'Led high-scale backend services and platform engineering initiatives for mission-critical business workflows.',
    description: [
      'Designed scalable backend APIs using Node.js, Next.js, GraphQL, TypeScript, AWS, Kafka, and MongoDB to support reliable, mission-critical services.',
      'Implemented event-driven architecture and asynchronous processing flows to improve throughput and reduce processing bottlenecks.',
      'Used Redis caching and optimized database access patterns to reduce API response latency.',
      'Built and integrated React.js modules in a micro-frontend architecture for seamless end-to-end delivery.',
      'Developed Playwright automation tests to strengthen regression coverage and release confidence.',
      'Led delivery planning with cross-functional teams, mentored engineers, and established API standards, logging, and observability practices.',
      'Improved release quality through code-review checklists, consistent backend design patterns, and stakeholder collaboration.'
    ]
  },
  {
    company: 'Quinnox',
    role: 'Lead Consultant',
    period: 'Aug 2024 - Nov 2024',
    desc: 'Modernized legacy platforms into modular, maintainable Node.js services with a focus on performance and stability.',
    description: [
      'Modernized legacy systems into scalable Node.js services and introduced modular service boundaries.',
      'Refactored tightly coupled components into reusable modules to improve maintainability and performance.',
      'Implemented API validation and centralized error handling to improve system stability and client integration quality.',
      'Applied performance profiling and database query optimization to reduce bottlenecks in critical endpoints.',
      'Collaborated with distributed teams on architecture, migration planning, risk tracking, and phased releases.'
    ]
  },
  {
    company: 'Metrics Numero',
    role: 'Senior Software Engineer',
    period: 'Sep 2022 - Aug 2024',
    desc: 'Owned engineering execution, delivery planning, and scalable architecture across product and platform workloads.',
    description: [
      'Led a team of five developers and owned design reviews, sprint planning, and engineering execution.',
      'Developed Node.js APIs and AWS serverless solutions to support scalable business workflows.',
      'Built React.js frontend modules and integrated them with backend services.',
      'Refactored legacy systems and created reusable service components to improve scalability, maintainability, and development speed.',
      'Strengthened CI/CD pipelines with improved build checks and environment configuration management.',
      'Partnered with product and QA teams to prioritize features and reduce production defects.'
    ]
  },
  {
    company: 'PlayerzPot',
    role: 'Software Engineer',
    period: 'Apr 2022 - Sep 2022',
    desc: 'Built resilient services for real-time gaming workloads and high-frequency concurrent traffic.',
    description: [
      'Developed backend services for real-time applications handling high-frequency updates and concurrent requests.',
      'Optimized performance and data-processing pipelines to improve responsiveness during peak traffic.',
      'Designed resilient service workflows with retry and fallback strategies and improved consistency through asynchronous job orchestration.',
      'Collaborated with cross-functional teams to deliver time-sensitive releases during active contest cycles.'
    ]
  },
  {
    company: 'Unico Connect',
    role: 'Software Developer',
    period: 'Oct 2019 - Feb 2022',
    desc: 'Delivered scalable backend systems and search-performance improvements for product operations.',
    description: [
      'Managed a team of four developers and owned project delivery from requirements through production rollout.',
      'Developed REST APIs and AWS-based backend systems for scalable product operations.',
      'Integrated Redis caching and Elasticsearch-backed search capabilities to improve retrieval efficiency and reduce repeated database work.',
      'Improved search API response time from approximately 5 seconds to under 1 second through search optimization, caching, and query tuning.',
      'Implemented CI/CD pipelines, token-based authentication, role checks, and secure API design practices.'
    ]
  },
  {
    company: 'RelifeMS (Penguins App)',
    role: 'LAMP Developer',
    period: 'Jul 2018 - Oct 2019',
    desc: 'Built healthcare workflow modules and supported stable delivery for patient-facing features.',
    description: [
      'Developed diagnosis module features using Laravel and supported healthcare workflow automation.',
      'Built and maintained backend modules for patient data handling with a focus on correctness and data integrity.',
      'Collaborated with QA, UX, business, and support teams to resolve legacy issues and deliver stable releases.'
    ]
  },
  {
    company: 'ColoredWeb',
    role: 'Web Developer',
    period: 'Nov 2015 - Jul 2018',
    desc: 'Delivered responsive web experiences and maintained client-side UX improvements across multiple projects.',
    description: [
      'Developed responsive websites and maintained client applications using HTML, CSS, JavaScript, and CMS.',
      'Delivered maintenance updates, bug fixes, and enhancements across client projects.',
      'Implemented cross-browser-compatible UI components and optimized page performance and reusable frontend patterns.'
    ]
  }
];

export const ExperienceSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
      Experience Timeline
    </Typography>
    <Stack spacing={3}>
      {experiences.map((exp) => {
        const bullets = exp.description?.length ? exp.description : [exp.desc];

        return (
          <Card key={exp.company} variant="outlined">
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {exp.role} · <Typography component="span" color="primary.main">{exp.company}</Typography>
                </Typography>
                <Chip label={exp.period} size="small" variant="outlined" />
              </Box>

              <List disablePadding sx={{ pl: 1 }}>
                {bullets.map((item, index) => (
                  <ListItem key={`${exp.company}-${index}`} disableGutters sx={{ py: 0.5, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 20, mt: 0.7 }}>
                      <FiberManualRecordIcon sx={{ fontSize: 9, color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                      sx={{ m: 0 }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  </Box>
);