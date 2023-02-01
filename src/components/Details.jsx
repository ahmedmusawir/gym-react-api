import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Details({ exerciseDetail }) {
  const { category, description, price, thumbnail, rating, title } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: category,
    },
    {
      icon: TargetImage,
      name: price,
    },
    {
      icon: EquipmentImage,
      name: rating,
    },
  ];

  return (
    <Stack
      gap={'60px'}
      mt='2rem'
      sx={{
        flexDirection: { lg: 'row', md: 'row' },
        p: '20px',
        alignContent: 'center',
      }}
      // style={{ height: '100%', border: '.5rem dotted red' }}
    >
      {/* <pre>{JSON.stringify(exerciseDetail)}</pre> */}
      <Box p='2rem'>
        <img
          src={thumbnail}
          alt={title}
          loading='lazy'
          className='detail-image'
          style={
            {
              // border: '.5rem dotted blue',
            }
          }
        />
      </Box>
      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px' },
          alignContent: 'center',
          justifyContent: { lg: 'center', md: 'center' },
          height: { lg: '80vh', md: '50vh' },
        }}
      >
        <Typography
          sx={{ typography: { xs: 'h3', sm: 'h3', md: 'h4', lg: 'h3' } }}
        >
          {title}
        </Typography>
        <Typography variant='h6'>{description}</Typography>
        {extraDetail.map((item, i) => (
          <Stack key={i} direction='row' gap={'24px'} alignItems='center'>
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                src={item.icon}
                alt='Body Part'
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography textTransform={'capitalize'} variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Details;
