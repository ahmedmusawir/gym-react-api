import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import {
  useGetAllProductsQuery,
  useGetProductByCategoryQuery,
} from '../services/dummyJsonApi';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS
  const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
    useGetAllProductsQuery();

  const { data: exercisesDataByCategory, isFetching: isFetchingByCategory } =
    useGetProductByCategoryQuery(bodyPart);
  // console.log('By Cats:', exercisesDataByCategory);

  console.log('bodyPart in Exercises:', bodyPart);

  useEffect(() => {
    if (exercisesData && exercisesDataByCategory) {
      if (bodyPart === 'all') {
        setExercises(exercisesData?.products);
      } else {
        // console.log('Data by Cats:', exercisesDataByCategory?.products);
        setExercises(exercisesDataByCategory?.products);
      }
    }
  }, [
    exercisesData,
    exercisesDataByCategory,
    bodyPart,
    isFetchingAllWorkouts,
    isFetchingByCategory,
  ]);

  // PAGINATION
  // console.log('Current Exercises in Exercises.jsx:', exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    console.log('Paginate Value: ', value);
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (isFetchingAllWorkouts || isFetchingByCategory) return <Loader />;

  console.log('Exercises:', exercises);
  console.log('Current Paginated Exercises:', currentExercises);
  if (!currentExercises.length) return <Loader />;

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
        {currentExercises.length &&
          currentExercises.map((exercise, i) => {
            // console.log('Single Exercise:', exercise);
            return <ExerciseCard key={i} exercise={exercise} />;
          })}
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
