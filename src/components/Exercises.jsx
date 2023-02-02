import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import {
  useGetAllWorkoutsQuery,
  useGetWorkoutByBodyPartQuery,
} from '../services/gymApi';
import { exercisesData } from '../data/exercisesData';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS
  // const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
  //   useGetAllWorkoutsQuery();

  const { data: exercisesDataByCategory, isFetching: isFetchingByCategory } =
    useGetWorkoutByBodyPartQuery(bodyPart);

  useEffect(() => {
    if (exercisesData && exercisesDataByCategory) {
      if (bodyPart === 'all') {
        setExercises(exercisesData);
      } else {
        setExercises(exercisesDataByCategory);
        setCurrentPage(1);
      }
    }
  }, [exercisesData, bodyPart, isFetchingByCategory]);
  // }, [exercisesData, bodyPart, isFetchingAllWorkouts, isFetchingByCategory]);

  // PAGINATION
  // console.log('Current Exercises in Exercises.jsx:', exercises);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (isFetchingByCategory) return <Loader />;
  // if (isFetchingAllWorkouts || isFetchingByCategory) return <Loader />;

  // console.log('Exercises:', exercises);

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
