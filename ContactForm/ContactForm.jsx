import { useState } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Button, Typography, Link } from '@mui/material';
import snapChat from '../../assets/snapChat.svg';
import facebook from '../../assets/fb.svg';
import xSpace from '../../assets/xSpace.svg';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !name || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const formData = {
      email,
      name,
      message,
    };

    try {
      const response = await axios.post('https://6680826c56c2c76b495c327c.mockapi.io/shop/v1/productData', formData);
      console.log('Message sent:', response.data);
      alert('Message sent successfully!');
      setEmail('');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography fontWeight={700} variant="h4" gutterBottom>Contact</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%' }}>
            <Typography variant="body1" gutterBottom>
              <Box component="span" sx={{ display: 'block', mb: 1 }}>• 8 800 000 00 00</Box>
              <Box component="span" sx={{ display: 'block', mb: 4 }}>• emailexample@email.com</Box>
            </Typography>
            <form noValidate={false} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: 'none',
                      backgroundColor: '#FAFAFA',
                      marginBottom: '10px',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: 'none',
                      backgroundColor: '#FAFAFA',
                      marginBottom: '10px',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: 'none',
                      backgroundColor: '#FAFAFA',
                      marginBottom: '10px',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ display: 'block', marginLeft: 'auto', width: '100px' }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
          <Box
            sx={{
              backgroundColor: '#FAFAFA',
              width: '458px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              height: '150px',
              marginTop: '30px',
            }}
          >
            <Typography variant="h6" gutterBottom>Find us</Typography>
            <Box display="flex" justifyContent="center" mt={2} gap="50px">
              <Link
                href="#"
                color="inherit"
                sx={{
                  cursor: 'pointer',
                  '& img': {
                    width: '56px',
                    height: '56px',
                    transition: 'opacity 0.3s, transform 0.3s',
                  },
                  '&:hover img': {
                    opacity: 0.8,
                    transform: 'scale(1.1)', 
                  },
                }}
              >
                <img src={snapChat} alt="Snapchat" />
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  cursor: 'pointer',
                  '& img': {
                    width: '56px',
                    height: '56px',
                    transition: 'opacity 0.3s, transform 0.3s',
                  },
                  '&:hover img': {
                    opacity: 0.8,
                    transform: 'scale(1.1)', 
                  },
                }}
              >
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  cursor: 'pointer',
                  '& img': {
                    width: '56px',
                    height: '56px',
                    transition: 'opacity 0.3s, transform 0.3s',
                  },
                  '&:hover img': {
                    opacity: 0.8,
                    transform: 'scale(1.1)', // Corrected typo
                  },
                }}
              >
                <img src={xSpace} alt="Twitter" />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;