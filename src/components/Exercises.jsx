import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log('exercises:', exercises);
  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p={'20px'}>
      <Typography variant='h5' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: '110px', xs: '50px' }}>
        {exercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
