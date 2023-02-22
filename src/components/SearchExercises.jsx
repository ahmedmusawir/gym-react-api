import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import {
  useGetAllWorkoutsQuery,
  useGetGymCategoriesQuery,
} from '../services/gymApi';
import Loader from './Loader';

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  setCurrentPage,
  setIsLoading,
}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  const { data: exercisesData, isFetching: isFetchingAllWorkouts } =
    useGetAllWorkoutsQuery();

  const { data: bodyPartsData, isFetching: isFetchingBodyParts } =
    useGetGymCategoriesQuery();

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
    if (bodyPartsData) {
      setBodyParts(['all', ...bodyPartsData]);
    }
  }, [
    bodyPartsData,
    exercisesData,
    isFetchingAllWorkouts,
    isFetchingBodyParts,
  ]);

  const handleSearch = () => {
    if (search) {
      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase())
      );

      setSearch('');
      setExercises(searchExercises);
      setCurrentPage(1);

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }
  };

  if (isFetchingAllWorkouts || isFetchingBodyParts) return <Loader />;

  return (
    <div className='search-container'>
      <Box width={'400px'} sx={{ width: { xl: '1488px' } }} m='auto'>
        <Stack
          alignItems={'center'}
          mt='37px'
          justifyContent={'center'}
          p='20px'
          className='search-exercises'
          maxWidth={'xl'}
        >
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { lg: '44px', xs: '30px' },
              color: '#e3e3e3',
              paddingTop: '4rem',
            }}
            mb='50px'
            textAlign={'center'}
          >
            Awesome Exercises You Should Know
          </Typography>
          <Box
            position={'relative'}
            mb='72px'
            display='flex'
            className='search-box'
          >
            <TextField
              sx={{
                input: {
                  fontWeight: '700',
                  border: '0px solid black',
                  borderRadius: '4px',
                },
                width: { lg: '800px', xs: '250px' },
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
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar
              data={bodyParts}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              isBodyPart
              setExercises={setExercises}
              setCurrentPage={setCurrentPage}
              setIsLoading={setIsLoading}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default SearchExercises;
