import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Details({ exerciseDetail }) {
  const { category, description, price, thumbnail, rating, title } =
    exerciseDetail;

  return (
    <Stack
      gap={'60px'}
      sx={{
        flexDirection: { lg: 'row', md: 'row' },
        p: '20px',
        alignContent: 'center',
      }}
      style={{ height: '100%', border: '.5rem dotted red' }}
    >
      {/* <pre>{JSON.stringify(exerciseDetail)}</pre> */}
      <img
        src={thumbnail}
        alt={title}
        loading='lazy'
        className='detail-image'
      />
      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px' },
          alignContent: 'center',
        }}
        style={{
          height: '80vh',
          border: '.5rem dotted blue',
          verticalAlign: 'middle',
        }}
      >
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='h6'>{description}</Typography>
      </Stack>
    </Stack>
  );
}

export default Details;
