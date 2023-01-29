import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import {
  useGetAllWorkoutsQuery,
  useGetGymCategoriesQuery,
} from '../services/gymApi';
import { exercisesData } from '../data/exercisesData';
import { bodyPartsData } from '../data/bodyPartsData';

const SearchExercises = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS

  // const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
  //   useGetAllWorkoutsQuery();
  // console.log('Raw data from API - Exercises:', exercisesData);

  // const { data: bodyPartsData, isFetching: isFetchingBodyParts } =
  //   useGetGymCategoriesQuery();
  // console.log('Raw data from API - Body Parts:', bodyPartsData);

  // console.log('Exercise Local Data', exerciseData);
  // console.log('Exercise Categories Local Data', bodyPartsData);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
    // THE FOLLOWING WON'T WORK CUZ CANNOT USE SPREAD OPERATOR HERE, THE DATA IS NOT YET AVAILABLE
    if (bodyPartsData) {
      setBodyParts(['all', ...bodyPartsData]);
      // setBodyParts(['all'].concat(bodyPartsData));
    }
  }, [bodyPartsData, exercisesData]);

  const handleSearch = () => {
    if (search) {
      const searchExercises = exercisesData?.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      // setSearch('');
      setExercises(searchExercises);
    }
  };

  console.log('Search result:', exercises);
  // console.log('Body Parts:', bodyParts);

  // if (isFetchingAllWorkouts || isFetchingBodyParts) return 'Loading...';
  // if (isFetchingBodyParts) return 'Loading...';

  return (
    <Stack alignItems={'center'} mt='37px' justifyContent={'center'} p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
        }}
        mb='50px'
        textAlign={'center'}
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position={'relative'} mb='72px' display='flex'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: 'fff',
          }}
          height='76px'
          value={search}
          placeholder='Search Exercises'
          type={'text'}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className='search-btn'
          sx={{
            backgroundColor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            // position: 'absolute',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          // data={['all', ...bodyPartsData]}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
