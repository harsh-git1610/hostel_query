import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HelpIcon from '@mui/icons-material/Help';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <QuestionAnswerIcon sx={{ fontSize: 40 }} />,
      title: 'Submit Queries',
      description: 'Get quick responses to your hostel-related questions',
    },
    {
      icon: <HelpIcon sx={{ fontSize: 40 }} />,
      title: 'FAQ Section',
      description: 'Find answers to commonly asked questions',
    },
    {
      icon: <ContactMailIcon sx={{ fontSize: 40 }} />,
      title: 'Contact Support',
      description: 'Reach out to our support team for assistance',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Hostel Query Portal
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Get instant answers to your hostel-related queries. Our platform
                provides quick and reliable support for all your hostel concerns.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/query')}
                  sx={{ mr: 2 }}
                >
                  Submit a Query
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/faq')}
                >
                  View FAQ
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 