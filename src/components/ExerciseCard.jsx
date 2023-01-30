import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.thumbnail} alt={exercise.title} loading='lazy' />
    <Stack direction='row'>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise?.category}
      </Button>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FCC757',
          fontSize: '12px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise?.brand}
      </Button>
    </Stack>
    <Typography
      ml='21px'
      color='#000'
      fontWeight='bold'
      sx={{ fontSize: { lg: '18px', xs: '16px' } }}
      mt='11px'
      pb='10px'
      textTransform='capitalize'
    >
      {exercise.title}
    </Typography>
  </Link>
);

export default ExerciseCard;