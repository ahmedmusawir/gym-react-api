import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import {
  useLazyGetAllWorkoutsQuery,
  useLazyGetWorkoutByBodyPartQuery,
} from '../services/gymApi';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({
  exercises,
  setExercises,
  bodyPart,
  currentPage,
  setCurrentPage,
}) => {
  const [exercisesPerPage] = useState(6);
  const [
    getAllWorkouts,
    { data: exercisesData, isFetching: isFetchingAllWorkouts },
  ] = useLazyGetAllWorkoutsQuery();

  const [
    getWorkoutByPart,
    { data: exercisesDataByCategory, isFetching: isFetchingByCategory },
  ] = useLazyGetWorkoutByBodyPartQuery();

  useEffect(() => {
    console.log('useEffect Exercise.jsx:', bodyPart);
    // if (exercisesData) {
    if (exercisesData && exercisesDataByCategory) {
      if (bodyPart === 'all') {
        // getAllWorkouts();
        setExercises(exercisesData);
        console.log('Exercise Data:', exercisesData);
      } else {
        getWorkoutByPart(bodyPart);
        setExercises(exercisesDataByCategory);
        setCurrentPage(1);
      }
    }
  }, [bodyPart, isFetchingAllWorkouts, isFetchingByCategory]);

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

  // if (isFetchingByCategory) return <Loader />;
  if (isFetchingAllWorkouts || isFetchingByCategory) return <Loader />;

  // console.log('Exercises:', exercises);
  console.log('Exercise Data:', exercisesData);

  console.log('Current Exercises:', currentExercises);

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p={'20px'}>
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
