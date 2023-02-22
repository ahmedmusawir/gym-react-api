import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, currentPage, setCurrentPage }) => {
  const [exercisesPerPage] = useState(6);

  // PAGINATION
  const indexOfLastExercise = currentPage * exercisesPerPage;
  console.log('indexOfLastExercise in Exercises.jsx:', indexOfLastExercise);
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  console.log('indexOfFirstExercise in Exercises.jsx:', indexOfFirstExercise);
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id='exercises' mt={'80px'} p={'20px'}>
      {/* <Box id='exercises' sx={{ mt: { lg: '110px' } }} p={'20px'}> */}
      <Typography
        variant='h4'
        mb='46px'
        sx={{ textAlign: 'center', color: 'white' }}
      >
        Showing Results
      </Typography>

      <Stack
        direction='row'
        sx={{ gap: '110px', xs: '50px' }}
        flexWrap='wrap'
        justifyContent={'center'}
      >
        {!currentExercises.length && (
          <Typography
            variant='h5'
            mb='46px'
            sx={{ textAlign: 'center', color: 'red' }}
          >
            No results found ... keep searching!
          </Typography>
        )}
        {currentExercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
