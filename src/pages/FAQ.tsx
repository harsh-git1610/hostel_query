import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I apply for hostel accommodation?',
      answer:
        'To apply for hostel accommodation, you need to fill out the hostel application form available on the university portal during the admission period. Make sure to submit all required documents and meet the eligibility criteria.',
    },
    {
      question: 'What are the hostel rules and regulations?',
      answer:
        'Hostel rules include maintaining quiet hours, keeping rooms clean, following mess timings, and adhering to visitor policies. A detailed rulebook is provided upon hostel allocation.',
    },
    {
      question: 'How can I report maintenance issues?',
      answer:
        'You can report maintenance issues through the hostel query portal. Select the "Maintenance" category and provide details about the issue. Our maintenance team will address it promptly.',
    },
    {
      question: 'What are the mess food timings?',
      answer:
        'Mess food is served at the following timings: Breakfast (7:00 AM - 9:00 AM), Lunch (12:00 PM - 2:00 PM), Evening Tea (4:30 PM - 5:30 PM), and Dinner (7:00 PM - 9:00 PM).',
    },
    {
      question: 'How can I change my room or roommate?',
      answer:
        'Room changes are allowed at the beginning of each semester. Submit a request through the hostel query portal with a valid reason. Room changes are subject to availability and approval.',
    },
    {
      question: 'What facilities are available in the hostel?',
      answer:
        'The hostel provides basic amenities including Wi-Fi, laundry service, study rooms, recreation rooms, and 24/7 security. Each floor has common bathrooms and a kitchenette.',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          align="center"
          sx={{ mb: 4 }}
        >
          Find answers to commonly asked questions about hostel life, rules, and
          facilities.
        </Typography>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default FAQ; 