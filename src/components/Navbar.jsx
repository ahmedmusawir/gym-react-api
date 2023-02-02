import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-around'}
      sx={{
        gap: {
          sm: '122px',
          xs: '20px',
        },
        mt: {
          sm: '32px',
          sx: '20px',
        },
        justifyContent: 'none',
      }}
      px='2rem'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '200px', margin: '0 30px' }}
          className='logo'
        />
      </Link>
      <Stack
        direction={'row'}
        gap={'30px'}
        fontSize={'20px'}
        alignItems={'flex-end'}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
            marginRight: '3rem',
          }}
        >
          Home
        </Link>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        ></Link>
        <a
          href='/#exercises'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
