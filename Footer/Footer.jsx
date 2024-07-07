import { Box, Container, Grid, Link, Typography } from '@mui/material';
import sFacebook from '../../assets/sfb.svg';
import sTwitter from '../../assets/sTwiter.svg';
import sInstagram from '../../assets/sInstagram.svg';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        py: 3,
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Contact</Typography>
            <Typography>8 800 000 00 00</Typography>
            <Typography>emailexample@email.com</Typography>
          </Grid>
          <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="flex-end">
            <Box display="flex" mt={1}>
              <Link
                href="#"
                color="#FFFFFF"
                sx={{
                  mx: 1,
                  marginTop: 5,
                  '& img': {
                    transition: 'transform 0.3s, opacity 0.3s',
                    opacity: 0.8,
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)',
                    opacity: 1,
                  },
                }}
              >
                <img src={sFacebook} alt="facebook" />
              </Link>
              <Link
                href="#"
                color="#FFFFFF"
                sx={{
                  mx: 1,
                  marginTop: 5,
                  '& img': {
                    transition: 'transform 0.3s, opacity 0.3s',
                    opacity: 0.8,
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)',
                    opacity: 1,
                  },
                }}
              >
                <img src={sTwitter} alt="twitter" />
              </Link>
              <Link
                href="#"
                color="#FFFFFF"
                sx={{
                  mx: 1,
                  marginTop: 5,
                  '& img': {
                    transition: 'transform 0.3s, opacity 0.3s',
                    opacity: 0.8,
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)',
                    opacity: 1,
                  },
                }}
              >
                <img src={sInstagram} alt="instagram" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="left" pt={3}>
          <Typography>2024 Sneaker store. All rights reserved</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;