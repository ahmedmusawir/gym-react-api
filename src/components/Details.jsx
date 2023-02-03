import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Details({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
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
      <Box p='1rem'>
        <img
          src={gifUrl}
          alt={name}
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
          gap: { sm: '0px', md: '10px', lg: '35px', xs: '20px' },
          alignContent: 'center',
          justifyContent: { lg: 'center', md: 'center' },
          height: { lg: '80vh', md: '50vh' },
        }}
      >
        <Typography
          sx={{
            typography: { xs: 'h4', sm: 'h4', md: 'h4', lg: 'h3' },
            color: '#e3e3e3',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: '24px', xs: '18px' }, color: '#e3e3e3' }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize', color: 'yellow' }}>
            {name}
          </span>{' '}
          bup is one of the best exercises to target your{' '}
          <span style={{ color: 'yellow' }}>{target}</span>. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
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
            <Typography
              textTransform={'capitalize'}
              variant='h5'
              sx={{ color: 'white' }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Details;
