import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt={'80px'} bgcolor='#C70039'>
      <Stack gap={'30px'} alignItems='center' px={'50px'} pt='24px'>
        <img src={Logo} alt='logo' width={'300px'} />
        <Typography variant='h5' pb={'40px'} sx={{ color: '#e9e9e9' }}>
          Built by Cyberize Group Inc.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
