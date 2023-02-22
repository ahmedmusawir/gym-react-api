import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { FallingLines, ThreeDots } from 'react-loader-spinner';

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

    if (bodyPart !== 'all') {
      console.log('bodyPart should not be all', bodyPart);
      getWorkoutByPart(bodyPart);
    }
    setCurrentPage(1);
  }, [bodyPart]);

  useEffect(() => {
    if (exercisesDataByCategory) {
      setExercises(exercisesDataByCategory);
      console.log('Exercise Data useEffect:', exercisesData);
    }
  }, [exercisesDataByCategory]);

  console.log('Exercise Data by Category:', exercisesDataByCategory);

  // PAGINATION
  const indexOfLastExercise = currentPage * exercisesPerPage;
  // console.log('indexOfLastExercise in Exercises.jsx:', indexOfLastExercise);
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // console.log('indexOfFirstExercise in Exercises.jsx:', indexOfFirstExercise);
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // if (isFetchingByCategory) return <Loader />;

  // console.log('Exercises:', exercises);
  // console.log('Exercise Data:', exercisesData);

  // console.log('Current Exercises:', currentExercises);

  return (
    <Box id='exercises' mt='80px' p={'20px'}>
      <Typography
        variant='h4'
        mb='46px'
        sx={{ textAlign: 'center', color: 'white' }}
      >
        {isFetchingByCategory && (
          <Stack
            alignItems={'center'}
            my='37px'
            justifyContent={'center'}
            p='20px'
            className=''
            maxWidth={'100%'}
          >
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='yellow'
              ariaLabel='three-dots-loading'
              visible={true}
            />
          </Stack>
        )}
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
