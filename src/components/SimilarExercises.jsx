import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useGetTargetWorkoutQuery } from '../services/gymApi';
import { useGetProductByCategoryQuery } from '../services/dummyJsonApi';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

function SimilarExercises({ targetName }) {
  console.log('Target:', targetName);
  // const { data, isFetching } = useGetProductByCategoryQuery(targetName);
  const { data: targetMuscleExercises, isFetching } =
    useGetTargetWorkoutQuery(targetName);
  console.log('Target Exercises:', targetMuscleExercises);

  if (isFetching) return <Loader />;
  // const targetMuscleExercises = data?.products;
  // console.log('Target Products', targetMuscleExercises.length);

  return (
    <Box
      sx={{ mt: { lg: '300px', md: '200px', sm: '150px', xs: '100px' } }}
      p='20px'
    >
      {/* {!targetMuscleExercises.length && <Loader />} */}
      <Typography variant='h4' mb={'33px'}>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {targetName}
        </span>{' '}
        Exercise Videos
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        <HorizontalScrollbar data={targetMuscleExercises} />
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
