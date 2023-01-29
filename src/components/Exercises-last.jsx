import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { useGetAllWorkoutsQuery } from '../services/gymApi';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS
  const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
    useGetAllWorkoutsQuery();

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
  }, [exercisesData]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercisesData.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (isFetchingAllWorkouts) return 'Loding...';

  console.log('exercises:', exercises);

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p={'20px'}>
      <Typography variant='h5' mb='46px' sx={{ textAlign: 'center' }}>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: '110px', xs: '50px' }}
        flexWrap='wrap'
        justifyContent={'center'}
      >
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
