import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';
import ExerciseCard from './ExerciseCard';
import { useLazyGetWorkoutByBodyPartQuery } from '../services/gymApi';

const Exercises = ({
  exercises,
  setExercises,
  bodyPart,
  currentPage,
  setCurrentPage,
}) => {
  const [exercisesPerPage] = useState(6);

  const [
    getWorkoutByPart,
    { data: exercisesDataByCategory, isFetching: isFetchingByCategory },
  ] = useLazyGetWorkoutByBodyPartQuery();

  useEffect(() => {
    if (bodyPart !== 'all') {
      getWorkoutByPart(bodyPart);
    }
    setCurrentPage(1);
  }, [bodyPart]);

  useEffect(() => {
    if (exercisesDataByCategory) {
      setExercises(exercisesDataByCategory);
    }
  }, [exercisesDataByCategory]);

  // PAGINATION
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
