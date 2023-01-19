import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <Stack>
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '48px', margin: '0 20px' }}
        />
      </Link>
      <Stack
        direction={'row'}
        gap={'30px'}
        fontSize={'20px'}
        alignItems={'flex-end'}
      >
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
          }}
        >
          Home
        </Link>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        ></Link>
        <Link
          to='/exercise'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
