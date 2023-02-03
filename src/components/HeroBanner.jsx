import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      {/* <Typography color='#FF2625' fontWeight={'600'} fontSize='26px' pb={5}> */}
      <Typography color='orangered' fontWeight={'600'} fontSize='26px' pb={5}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '2.5rem', xs: '2rem' }, color: 'white' }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontSize={'22px'}
        lineHeight='35px'
        mb={7}
        mt={3}
        sx={{ color: 'white' }}
      >
        Check out the most effective exercises
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{ backgroundColor: '#ff2625', padding: '20px' }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color='white'
        sx={{
          opacity: 0.21,
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize='200px'
        mt={8}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
