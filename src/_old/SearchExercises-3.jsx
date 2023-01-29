import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Exercises from './Exercises';

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
  bodyPartsData,
}) => {
  // const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState('');

  // THE FOLLOWING WORKS. ONLY USGING STATIC DATA DUE TO API HARD LIMITS

  // const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
  //   useGetAllWorkoutsQuery();
  // const { data: bodyPartsData, isFetching: isFetchingBodyParts } =
  //   useGetGymCategoriesQuery();

  // console.log('Exercise Local Data', gymWorkouts);
  // console.log('Exercise Categories Local Data', gymCats);

  const handleSearch = () => {
    if (search) {
      const searchExercises = exercisesData?.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchExercises);
    }
  };

  console.log('Search result:', exercises);
  // if (isFetchingAllWorkouts || isFetchingBodyParts) return 'Loading...';

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
          data={['all', ...bodyPartsData]}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
